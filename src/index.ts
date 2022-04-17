import a2bt, { toConsole, rootToArray } from "a2bt";
import type { TreeNode } from "a2bt/dist/rootToArray";

const addend = 1;
const grid = true;
const nodes = ["aaa", "bbb", "ccc"];
const fgColor = 93;

toConsole(a2bt(nodes, addend, grid, fgColor));

//--------------------

const root: TreeNode = {
	val: 1,
	left: {
		val: 2,
		right: {
			val: 4
		}
	},
	right: {
		val: 3
	}
}
const array: string[] = [];


// You can use rootToArray to convert an TreeNode root into an array so that it can be used with a2bt.
rootToArray(array, root)

toConsole(a2bt(array))