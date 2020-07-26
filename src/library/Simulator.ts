import Color from "./Color"

export default class Simulator {

	grid: Grid
	dimension: number

	constructor(grid: Grid) {
		this.grid = grid
		this.dimension = this.grid.getDimension();
	}

	setLED(row: number, col: number, color: Color) {
		let index = x * this.dimension + y;
		this.grid.setLED(index, color);
	}

	setGrid(leds: Color[][]) {
		for (let [row, colors] of leds.entries()) { 
			for (let [col, color] of colors.entries()) {
				this.setLED(row, col, color);
			}
		}
	}

	setGridArray(leds: Color[]) {
		for (let [index, color] of leds.entries()) {
			this.grid.setLED(index, color)
		}
	}

	// Patterns
	fillSolid(color: Color) {
		let leds: Color[] = [];
		for (let i = 0; i < this.dimension * this.dimension; i++) {
			leds.push(color);
		}
	}
}

