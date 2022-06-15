import type { ShortestDistanceSoFar, Edge } from './types';

// Each val must be unique.
function findShortestPath(root: string, nodes: Map<string, Edge[]>) {
	const relaxed = new Set([root]);
	const shortestEdgeSoFar: ShortestDistanceSoFar = new Map() // These are the shorest distances that we know so far

	/**
	 * 
	 * @param leastDistantEdge [parent, distance]
	 * @returns 
	 */
	const getTotalDistance = (leastDistantEdge: Edge) => {
		let current = leastDistantEdge[0];
		let total = leastDistantEdge[1];
		while (current[0]) {
			const edge = shortestEdgeSoFar.get(current[0])!;
			current = edge[0];
			total += edge[1];
		}
		return total;
	}

	if (!nodes.has(root)) {
		return 0;
	}
	const queue: Edge[] = nodes.get(root)!;

	for (const edge of queue) {
		shortestEdgeSoFar.set(edge[0], [
			root,
			edge[1],
		]);
	}

	while (queue.length) {
		const node = queue.shift();
		if (!node) {
			throw new Error('queue is unexpecedly undefined');
		}
		const edges = (nodes.get(node[0]) ?? []).sort((first, second) => {
			if (first[1] > second[1]) {
				return 1;
			} else if (first[1] === second[1]) {
				return 0;
			} else {
				return -1;
			}
		});
		for (const edge of edges) {
			if (shortestEdgeSoFar.has(edge[0])) {
				const nodeTotalDistance = getTotalDistance(shortestEdgeSoFar.get(node[0])!) + edge[1];
				const edgeCurrentTotalDistance = getTotalDistance(shortestEdgeSoFar.get(edge[0])!);
				if (nodeTotalDistance < edgeCurrentTotalDistance) {
					shortestEdgeSoFar.set(edge[0], [
						// New Parent
						node![0],
						// New shortest distance
						nodeTotalDistance + edgeCurrentTotalDistance])
				}
			} else {
				shortestEdgeSoFar.set(edge[0], [node[0], edge[1]]);
			}
			if (!relaxed.has(edge[0])) {
				queue.push(edge);
			}
		}
		// After calculating the shortest distance to each edge, relax the node.
		relaxed.add(node[0]);
	}

	return shortestEdgeSoFar;
}
export default findShortestPath