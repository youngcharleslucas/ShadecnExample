import js from "@eslint/js"
import globals from "globals"
import noInlineColorUtilities from "./eslint-rules/no-inline-color-utilities.js"

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "custom-rules": {
        rules: {
          "no-inline-color-utilities": noInlineColorUtilities,
        },
      },
    },
    rules: {
      "custom-rules/no-inline-color-utilities": "error",
      "no-unused-vars": "off",
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
]
