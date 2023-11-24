/**
 * Creates a D3.js layer on a given element with specified attributes.
 *
 * @param {d3.Selection} el - parent D3 selection.
 * @param {string} tag - HTML/SVG tag to create.
 * @param {string} cls - class to apply to new elements.
 * @param {Function} [data=(d) => [d]] - data-binding function.
 * @returns {d3.Selection} - layer of `<${tag} class="${cls}">`.
 *
 * @example
 * // Avoid using `.append()` on D3 selections! Use `layer()` instead.
 * // AVOID THIS
 * el.selectAll("g.nodes").append("g").attr("class", "nodes");
 *
 * // USE THIS INSTEAD
 * import { layer } from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
 * layer(el, "g", "layer");
 *
 * @example
 * // To specify the data against the appended nodes:
 * // AVOID THIS
 * el.selectAll("g.nodes").data(data).append("g").attr("class", "nodes");
 *
 * // USE THIS INSTEAD
 * import { layer } from "https://cdn.jsdelivr.net/npm/@gramex/chartbase@1";
 * layer(el, "g", "layer", data);
 */
export const layer = (el, tag, cls, data = (d) => [d]) =>
  el.selectAll(`${tag}.${cls}`).data(data).join(tag).attr("class", cls);

/**
 * Retrieves the closest SVG element, along with its width and height
 *
 * @param {string|HTMLElement} el - The selector or HTML element.
 * @param {number} [width] - The width of the SVG. Optional, fallback to the closest SVG parent.
 * @param {number} [height] - The height of the SVG. Optional, fallback to the closest SVG parent.
 * @returns {SVGSize} - `{ el, container, width, height }`.
 *
 * @example
 * // Set the default width and height of a chart based on the closest SVG element:
 * const { width, height } = getSVG("#chart-svg");
 *
 * @example
 * // If your function accepts an optional width or height parameter, pass it as defaults:
 * { width, height } = getSVG("#chart-svg", width, height);
 *
 * @example
 * // If the element is not an SVG (e.g. `g#nodes`), you can access the closest SVG container by:
 * { container } = getSVG("g#nodes");
 *
 * @example
 * // el may be a selector or a DOM element. To get the DOM element, use:
 * { el } = getSVG("g#nodes");
 */
export function getSVG(el, width, height) {
  el = typeof el == "string" ? document.querySelector(el) : el;
  // If width and height are not specified, get them from the closest SVG parent.
  const container = el.closest("svg");
  width = width ?? (container?.viewBox?.animVal?.width || container?.width?.animVal?.value) ?? 0;
  height = height ?? (container?.viewBox?.animVal?.height || container?.height?.animVal?.value) ?? 0;
  /**
   * @typedef {Object} SVGSize
   * @property {HTMLElement} el - The DOM element passed. If a string selector was passed, this is the result of `document.querySelector`.
   * @property {HTMLElement} container - The closest SVG element.
   * @property {number} width - The width of the SVG.
   * @property {number} height - The height of the SVG.
   */
  return { el, container, width, height };
}
