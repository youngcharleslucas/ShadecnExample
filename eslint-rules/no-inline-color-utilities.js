/**
 * Custom ESLint rule: no-inline-color-utilities
 * Forbids raw Tailwind color utility classes in className props and cva/cn/clsx calls.
 * Use design tokens (bg-primary, text-foreground, etc.) instead.
 */

const COLOR_NAMES = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime",
  "green", "emerald", "teal", "cyan", "sky",
  "blue", "indigo", "violet", "purple", "fuchsia",
  "pink", "rose", "black", "white",
]

const PREFIXES = [
  "bg", "text", "border", "ring", "from", "to", "via",
  "fill", "stroke", "outline", "decoration", "shadow",
  "divide", "placeholder",
]

// Matches named Tailwind colors: "bg-red-500", "text-blue-300", "border-white", "bg-black"
const NAMED_COLOR_PATTERN = new RegExp(
  `\\b(${PREFIXES.join("|")})-((${COLOR_NAMES.join("|")})(-(\\d+))?)(/(\\d+))?\\b`
)

// Matches arbitrary color values: "bg-[#fff]", "text-[rgb(0,0,0)]", "border-[hsl(...)]", "bg-[oklch(...)]"
const ARBITRARY_COLOR_PATTERN = new RegExp(
  `\\b(${PREFIXES.join("|")})-\\[(#[0-9a-fA-F]{3,8}|rgba?\\([^)]+\\)|hsla?\\([^)]+\\)|oklch\\([^)]+\\)|color\\([^)]+\\))(/(\\d+))?\\]`
)

function isInlineColor(cls) {
  return NAMED_COLOR_PATTERN.test(cls) || ARBITRARY_COLOR_PATTERN.test(cls)
}

function checkString(str, node, context) {
  const classes = str.split(/\s+/)
  for (const cls of classes) {
    if (isInlineColor(cls)) {
      context.report({
        node,
        message: `Use a design token (e.g., bg-primary, text-foreground) instead of the raw Tailwind color utility '${cls}'.`,
      })
    }
  }
}

function checkNode(node, context) {
  if (node.type === "Literal" && typeof node.value === "string") {
    checkString(node.value, node, context)
  } else if (node.type === "TemplateLiteral") {
    for (const quasi of node.quasis) {
      checkString(quasi.value.raw, quasi, context)
    }
  }
}

function isTargetCall(node) {
  if (node.type !== "CallExpression") return false
  const callee = node.callee
  if (callee.type === "Identifier" && ["cva", "cn", "clsx"].includes(callee.name)) return true
  return false
}

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow raw Tailwind color utilities; use design tokens instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.type === "JSXIdentifier" &&
          node.name.name === "className" &&
          node.value
        ) {
          if (node.value.type === "Literal") {
            checkNode(node.value, context)
          } else if (
            node.value.type === "JSXExpressionContainer" &&
            node.value.expression
          ) {
            checkNode(node.value.expression, context)
          }
        }
      },
      CallExpression(node) {
        if (isTargetCall(node)) {
          for (const arg of node.arguments) {
            checkNode(arg, context)
          }
        }
      },
    }
  },
}
