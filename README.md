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

## API

[See API documentation](docs/api.md ":include :type=markdown")

## Release notes

- 1.0.2: 24 Nov 2023. Fix `getSVG()` width and height calculation
- 1.0.0: 31 Oct 2023. Initial release

## Authors

Anand S <s.anand@gramener.com>

## License

[MIT](https://spdx.org/licenses/MIT.html)
