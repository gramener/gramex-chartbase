/**
 * Creates a D3.js layer on a given element with specified attributes.
 *
 * @param {d3.Selection} el - The parent D3 selection.
 * @param {string} tag - The HTML/SVG tag to create.
 * @param {string} cls - The class to apply to new elements.
 * @param {Function} [data=(d) => [d]] - The data-binding function.
 * @returns {d3.Selection} The D3.js selection.
 */
export const layer = (el, tag, cls, data = (d) => [d]) =>
  el.selectAll(`${tag}.${cls}`).data(data).join(tag).attr("class", cls);

/**
 * Retrieves the closest SVG element, along with its width and height
 *
 * @param {string|HTMLElement} el - The selector or HTML element.
 * @param {number} [width] - The width of the SVG. Optional, fallback to the closest SVG parent.
 * @param {number} [height] - The height of the SVG. Optional, fallback to the closest SVG parent.
 * @returns {Object} Object containing the element, SVG container, and dimensions.
 */
export function getSVG(el, width, height) {
  el = typeof el == "string" ? document.querySelector(el) : el;
  // If width and height are not specified, get them from the closest SVG parent.
  const container = el.closest("svg");
  width = width ?? container?.viewBox?.animVal?.width ?? container?.width?.animVal?.value ?? 0;
  height = height ?? container?.viewBox?.animVal?.height ?? container?.height?.animVal?.value ?? 0;
  return { el, container, width, height };
}
