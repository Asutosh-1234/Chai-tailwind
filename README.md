# Chai.js - Tailwind Clone

Chai.js is a lightweight, zero-dependency, utility-first CSS engine built purely in Vanilla JavaScript. It allows you to style your HTML simply by adding classes—skipping the need to write custom CSS or set up complex build steps.

## Documentation

Chai.js works by adding `chai-*` class names directly to your HTML elements. It scans the DOM and applies inline styles automatically. Here are the included utilities:

### Colors
Available colors: `blue`, `red`, `green`, `gray`, `black`. (Shades range from `100` to `900`).
* **Background:** `chai-bg-{color}-{shade}` (e.g., `chai-bg-blue-500`)
* **Text:** `chai-text-{color}-{shade}` (e.g., `chai-text-gray-400`)
* **Border:** `chai-border-{color}-{shade}` (e.g., `chai-border-red-500`)

### Spacing (Values in px)
* **Padding:** `chai-p-{n}`, `chai-px-{n}`, `chai-py-{n}`, `chai-pt-{n}`, `chai-pb-{n}`, `chai-pl-{n}`, `chai-pr-{n}`
* **Margin:** `chai-m-{n}`, `chai-mx-{n}`, `chai-my-{n}`, `chai-mt-{n}`, `chai-mb-{n}`, `chai-ml-{n}`, `chai-mr-{n}` (or use `auto` like `chai-mx-auto`)
* **Gap:** `chai-gap-{n}`

### Layout & Sizing
* **Flexbox:** `chai-flex`, `chai-flex-row`, `chai-flex-col`
* **Justify:** `chai-justify-{center|start|end|between|around|evenly}`
* **Align Items:** `chai-items-{center|start|end|stretch}`
* **Width/Height:** `chai-w-{n}`, `chai-h-{n}` (Values in px)

### Typography
* **Size:** `chai-text-{sm|md|lg|xl}`
* **Weight:** `chai-font-{thin|extralight|light|normal|medium|semibold|bold|extrabold|black}`
* **Alignment:** `chai-text-{center|left|right}`
* **Decoration:** `chai-decoration-none`

### Borders
* **Width:** `chai-border-{n}` (Values in px)
* **Radius:** `chai-rounded-{sm|md|lg|xl|2xl|3xl|full}`

---

## Project Approach

The core idea was to build an engine that mimics Tailwind CSS without requiring Node.js, Webpack, PostCSS, or any build step.
1. **DOM Scanning:** The engine (`index.js`) executes on page load, capturing all elements containing the substring `chai-` in their class list via `document.querySelectorAll`.
2. **Parsing:** It iterates through the class list, splits the class strings by the `-` delimiter, and identifies the utility type and value.
3. **Dynamic Styling:** Using simple `switch` cases, it maps the parsed values (like `flex`, `p-10`, `bg-red-500`) to exact inline CSS properties (`element.style`).

## Project Learnings

* **DOM Manipulation:** Improved proficiency in efficiently traversing the DOM and dynamically manipulating the `HTMLElement.style` API in real-time.
* **CSS Architecture:** Deepened understanding of design systems by structuring consistent scales for typography, spacing, and color palettes.
* **Trade-offs of Runtime Execution:** Gained insight into the benefits (zero setup, readable code) and trade-offs (runtime performance overhead vs. pre-compiled CSS) of applying styles dynamically on the client side.

## Tech Stack

* **HTML5:** For the structure and the interactive showcase page.
* **Vanilla JavaScript (ES6+):** For the core parsing engine and styling logic.
* **Zero Dependencies:** No external libraries, frameworks, or CSS preprocessors were used.

## How to run this project

Because this project requires absolutely no build step or dependencies, running it is incredibly simple:

1. Clone or download the repository to your local machine.
2. Open the `index.html` file directly in any modern web browser.
   *(You can simply double-click the file, or use an extension like VS Code Live Server for hot-reloading if you decide to make edits).*
3. Explore the `index.html` code to see how `chai-*` classes are utilized, and peek into `index.js` to see the engine in action!
