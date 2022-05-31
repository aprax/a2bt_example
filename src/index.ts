const { treeNodeToBinaryArray, default: a2bt } = require("a2bt");

const addend = 1;
const grid = true;
const nodes = ["aaa", "bbb", "ccc"];
const fgColor = 93;

a2bt({ nodes, heightAddend: addend, showGrid: grid, fgColor });

//--------------------

const root = {
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
treeNodeToBinaryArray(root)

a2bt({ nodes: array })