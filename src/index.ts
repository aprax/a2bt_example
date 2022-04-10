import a2bt, {toConsole} from 'a2bt';

const SIZE = 31;
const numbers = Array(SIZE);
for (let x = 1; x <= SIZE; x++) {
	numbers[x-1] = x;	
}

const heightAddend = 0;
const showGrid = false;
const fgColor = 92
toConsole(a2bt(numbers, heightAddend, showGrid, fgColor));
