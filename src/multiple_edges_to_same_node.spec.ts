import findShortestPath from '.';
import type { Nodes } from './types';

const nodes: Nodes = new Map([
	['A', [['B', 2], ['B', 7], ['B', 5]]],
])
it('should find the shortest among the multiple edges that point to the same node', () => {
	expect(findShortestPath('A', nodes)).toMatchSnapshot();
})