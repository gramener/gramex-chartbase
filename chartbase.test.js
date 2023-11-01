/**
 * @jest-environment jsdom
 */
import { layer, getSVG } from "./chartbase.js";
import { select } from "d3-selection";

// Mocking the necessary elements for testing
beforeAll(() => {
  document.body.innerHTML = `
    <svg id="chart-svg" width="500" height="500">
      <g id="nodes"></g>
    </svg>
  `;
});

describe("layer function", () => {
  it("creates an element with specified tag and class", () => {
    const el = select("svg#chart-svg");
    layer(el, "g", "layer");
    const result = document.querySelectorAll("svg#chart-svg > g.layer");
    expect(result).not.toBeNull();
    expect(result.length).toBe(1);
  });

  it("applies data-binding correctly", () => {
    const el = select("g#nodes");
    const testData = [{}, {}]; // An array of two empty objects
    layer(el, "circle", "node", () => testData);
    const nodes = document.querySelectorAll("g#nodes > circle.node");
    expect(nodes.length).toBe(2);
  });
});

describe("getSVG function", () => {
  xtest("gets width and height from closest SVG - skip if .animVal is not supported in JSDOM", () => {
    const { width, height } = getSVG("#nodes");
    expect(width).toBe(500);
    expect(height).toBe(500);
  });

  it("accepts width and height parameters when they are defined", () => {
    const { width, height } = getSVG("#nodes", 200, 250);
    expect(width).toBe(200);
    expect(height).toBe(250);
  });

  it("returns the closest SVG container", () => {
    const { container } = getSVG("#nodes");
    expect(container).toBe(document.querySelector("svg#chart-svg"));
  });

  it("accepts a selector and returns the DOM element", () => {
    const { el } = getSVG("#nodes");
    expect(el).toBe(document.querySelector("#nodes"));
  });

  it("accepts a DOM element directly and returns the same", () => {
    const nodesElement = document.querySelector("#nodes");
    const { el } = getSVG(nodesElement);
    expect(el).toBe(nodesElement);
  });
});
