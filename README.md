# Lite Dashboard Widgets

A lightweight, framework-agnostic set of dashboard visualization components (HTML + CSS + JS).
Designed for analytics dashboards, admin panels, SaaS internal tools — and easy to sponsor.

## Features
- Pure JS chart widgets (no heavy dependencies)
- Works with any backend (FastAPI, Laravel, Django, Node, etc.)
- Bar chart, line chart, gauge progress widget included
- Minimalist modern UI design
- Ready to embed in existing dashboards

## Usage
Include the CSS and JS:
```html
<link rel="stylesheet" href="dist/lite-widgets.css" />
<script src="dist/lite-widgets.js"></script>
```

Create a chart container:
```html
<div id="myChart" class="lw-bar" data-values="[10,20,30]" data-labels="['A','B','C']"></div>
<script> LiteWidgets.render(); </script>
```

## License
MIT
