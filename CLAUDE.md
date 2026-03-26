# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website for Eugenio Quintero (Data Analyst), built on the **Massively** template by [HTML5 UP](https://html5up.net). It has no build system, no package manager, and no server-side code.

## Development

Open `index.html` directly in a browser. No build step is required to view changes.

### Styling (SASS)

Styles are authored in `assets/sass/` and compiled to `assets/css/main.css`. If you modify `.scss` files, you must recompile:

```bash
sass assets/sass/main.scss assets/css/main.css
```

The compiled CSS (`assets/css/main.css`) is what the browser uses — editing it directly is possible but edits will be lost if SASS is recompiled.

## Architecture

- **`index.html`** — Main portfolio page. Projects are listed as `<article>` elements inside `<section class="posts">`. The featured project is the first `<article class="post featured">`.
- **`generic.html`** / **`elements.html`** — Template reference pages from HTML5 UP (not part of the portfolio content).
- **`assets/sass/`** — SASS source files organized into `base/`, `components/`, `layout/`, and `libs/`. `main.scss` is the entry point.
- **`assets/js/main.js`** — Custom JS (scroll effects, animations). All other JS files are vendor libraries (jQuery, Scrollex, Scrolly).

## Adding a New Project

Add a new `<article>` block inside `<section class="posts">` in `index.html`, following the existing pattern with a header, image link, description paragraph, and "View Project" button. The comment `<!-- Aqui van los otros proyectos-->` marks the insertion point.
