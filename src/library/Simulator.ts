import Color from "./Color"
import Grid from '../components/Grid'

export default class Simulator {

	grid: Grid
	dimension: number

	constructor(grid: Grid) {
		this.grid = grid
		this.dimension = this.grid.getDimension();
	}

	setLED(row: number, col: number, color: Color) {
		if (row >= this.dimension || row < 0 || col >= this.dimension || col < 0) {
			return;
		}
		let index = row * this.dimension + col;
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
