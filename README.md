# Shadcn and styling for modification  

**Overview**  
-   shadcn components  
-   Tailwind styling for modes and themes  

### Goal: Solve styling issues

**Current problems**  
-   Multiple methods of applied styles:  
    -   scss  
    -   no consistent css/tailwind style sheet theme  
    -   inline styling with tailwind    
    -   applied inline "styles"
    -   modules.css  
    -   No css class nameing convention (like BEM)  
-   PrimeReact component styling:  
    -   pass through (pt)  
    -   targeting class names directly (ex: p-dropdown)
    -   module.css  
    -   direct application of className  
    -   tailwind  
-   **We lost track of specificity!!!**  
    -   We don't know which style has a higher specificity, 
        so we give up and use inline "style" or "!important"  
-   Currently components are not extendable to themes  
    -   Every UI redesign is a major overhaul  
    -   We cannot apply themes like, like light or dark mode  
-   Inconsistent component styles  
    -   Each component, like a button, is built slightly different by 
        each developer  

**Proposed Solutions:**  
-   Use a component library that gives us full control of styling  
    -   Reduce styling methods  
    -   shadcn  
    -   tailwindcss  
-   UI designer best practices  
    -   Use a tool for accurately representing the UI design (Figma)  
    -   Create a design system (Material Design)
        -   Create a design pallete (neutral-10, primary-80...)
        -   Apply pallete to design system (primary, seconday, 
            on-surface, outline...)  
    -   Create re-usable components  
        -   Create a name and convention for components like 
            buttons and dialogs in Figma  
        -   Developers can carry that name and style convention 
            directly over to React  
        -   These lead to better communication between Devs and 
            UI designers  
-   Tailwind css  
    -   Reduce our styling methods down to one  
    -   Use the tailwind `@theme` for applying colors  
        -   Will map the UI design system to tailwind classes 
            `--color-primary: var(--md-sys-color-primary)`  
    -   Use variables, **NO INLINE ARBITRARY STYLES**
    -   The above actions will make it possible to switch between 
        themes (light or dark)  

## Sample Project  

### Highlights  
-   Multiple Shadcn Component versions  
-   Light and Dark mode  
-   Extendable for design themes  

**What is shadcn?**  
Components that you own the code to.  
Radix Ui components with Tailwindcss themes applied.  
There are predesigned shadcn libraries available in the community.  

### Source Code location  

https://github.com/youngcharleslucas/ShadecnExample  

**Branches**  
-   main: Working example  
-   split_stylesheet: Moves global.css styles into imported style sheets  
-   broke_stylesheet: Issue I ran into with nesting multiple css 
    tokens/variables. Wanted to share.  

After cloning, may have to install from the public registry directly:  
`npm install --registry=https://registry.npmjs.org/`  

### Installing multiple shadcn libraries  

https://ui.shadcn.com/docs/installation/vite

```json
# components.json  
# Specify path so internal references to shadcn components 
# are accurate  
... 
  "aliases": {
    "components": "@/Components/Ui/V2", # Update path for install
    "utils": "@/lib/utils",
    "ui": "@/Components/Ui/V2", # Update path for install  
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  ...
```

`npx shadcn@latest add button --path src/Components/Ui/V2`  

### Remove TypeScript  

Shadcn comes in with TypeScript. For our project, which isn't using TypeScript,
we need to delete the TypeScript code from the installed shadcn components.  

### Styling Shadcn  

https://ui.shadcn.com/docs/theming  

#### What is the function `cn`?  
https://medium.com/@agyemangmichael555/finally-got-what-cn-means-in-shadcn-and-it-changed-everything-120711f9221b  

`cn` is a helper function to join two tools, `twMerge` and `clsx`  

#### What is cva (class-variance-authority)?  

Package that comes with shadcn.  
Used to apply themes to components.  

https://cva.style/docs/getting-started/variants  

Look at this project's example for button:  
`src/Components/Ui/V1/button.jsx`  

## Figma, Tailwind, and Themes  

### Figma  

Figma design systems are created and organized by the UI designer.  

These are converted into design Tokens. Tokens are represented in different 
ways (json, yaml) but used as a form of communication for transferring Figma 
styles into styles in the application (for us, css tokens and Tailwind).  

The UI designer organizes re-usable elements into 'components'. 
The devs can translate these ui components into re-usable code components.  

### Tailwind  

Tailwind has classes. You can define classes in the stylesheet `@theme` 
object.  

Design tokens from figma are imported as classes in a stylesheet. The tokens 
are retained as css `variables`. The same naming convention needs to be used 
between these classes so that themes can be used.  

### Themes  

Themes can consist of light, dark, or more.  

Theme styles are defined in a class in a stylesheet. Each theme assigns its 
own values to the shared naming convention for design tokens.  

Themes are determined in two ways in this project:  
-   specificity  
-   programatically changing element classes  

Specificity is referred to the priority of applied style. A class name given 
inline on the html element will be applied over the `root` styles. 

Classes that appear latter in the stylesheet have a higher priority than 
classes that appear earlier in the stylesheet.  

Programatically the styles are swapped by using a custom react hook to assign 
the class to the document's true root html element. 

React has control of a virtual DOM that beings on the page's div element with 
the id of 'root'. This does not control the styles of element in the window 


    