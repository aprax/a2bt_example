import findShortestPath from ".";
import type { Nodes } from './types';

// global.console = require("console");

const nodes: Nodes = new Map([
	['S', [['A', 8], ['D', 2], ['G', 3]]],
	['A', [['B', 3], ['E', 7]]],
	['B', [['C', 4]]],
	// C has no edges
	['D', [['A', 2], ['E', 13]]],
	['E', [['G', 9], ['F', 10], ['C', 0]]],
	['F', [['C', 8]]],
	['G', [['F', 5], ['S', 5]]],
]);

nodes.forEach((_, key) => {
	it(`should find the shortest paths to all other nodes from ${key}`, () => {
		expect(findShortestPath(key, nodes)).toMatchSnapshot();
	})
})


