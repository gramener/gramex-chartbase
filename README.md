# @gramex/chartbase

Base utilities for charts

## Example

```js
import { layer, getSVG } from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
// Create a new g.layer under <svg id="chart-svg"> ONLY IF it does not exist
layer(d3.select("svg#chart-svg"), "g", "layer");
// Get the viewBox width and height of <svg id="chart-svg">
const { width, height } = getSVG("svg#chart-svg");
```

## Installation

Install via `npm`:

```bash
npm install @gramex/chartbase
```

Use locally as an ES module:

```html
<script type="module">
  import chartbase from "./node_modules/@gramex/chartbase/dist/chartbase.js";
</script>
```

Use via CDN as an ES Module:

```html
<script type="module">
  import chartbase from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
</script>
```

## layer

Avoid using `.append()` on D3 selections. Instead of:

```js
// AVOID THIS
el.selectAll("g.nodes").append("g").attr("class", "nodes");

// USE THIS INSTEAD
import { layer } from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
layer(el, "g", "layer");
```

If you want to specify the data against the appended nodes:

```js
// AVOID THIS
el.selectAll("g.nodes").data(data).append("g").attr("class", "nodes");

// USE THIS INSTEAD
import { layer } from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
layer(el, "g", "layer", data);
```

## getSVG

Set the default width and height of a chart based on the closest SVG element. For example:

```js
const { width, height } = getSVG("#chart-svg");
```

If your function accepts a width or height parameter that may be undefined, pass it as:

```js
// Update the width and height only if they are undefined
{ width, height } = getSVG("#chart-svg", width, height);
```

If the element is not an SVG (e.g. `g#nodes`), you can access the closest SVG container by:

```js
{ container } = getSVG("g#nodes");
```

Element can be a selector - it need not be a DOM element. To access the DOM element, use:

```js
{ el } = getSVG("g#nodes");
```

## API

[See API documentation](docs/api.md ":include :type=markdown")

## Release notes

- 1.0.2: 24 Nov 2023. Fix `getSVG()` width and height calculation
- 1.0.0: 31 Oct 2023. Initial release

## Authors

Anand S <s.anand@gramener.com>

## License

[MIT](https://spdx.org/licenses/MIT.html)
