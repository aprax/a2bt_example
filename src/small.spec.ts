import findShortestPath from '.';
import type { Nodes } from './types';

const nodes: Nodes = new Map([
	['A', [['B', 2], ['C', 3]]],
	['B', [['A', 1], ['C', 7]]],
	['C', [['A', 10], ['B', 6],]],
])

nodes.forEach((_, key) => {
	it(`should find the shortest paths to all other nodes from ${key}`, () => {
		expect(findShortestPath(key, nodes)).toMatchSnapshot()
	})
});
