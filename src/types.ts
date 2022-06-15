/* 
 * Each node consists of its name and is mapped an an array of its edges.
 * {
 * 	A: [['B',2], ['C', 3]]
 * }
 */
export type Nodes = Map<string, Edge[]>;

/*
 * {
 *  'A' => [parent, least distance so far]
 * }
 */
export type ShortestDistanceSoFar = Map<string, Edge>;

/*
 * The distance from a node to a desination node.
 * [destination node name, distance ]
 */

/*
 * Each edge is of the shape [parent, distance]
 */
export type Edge = [string, number];
