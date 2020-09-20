import Simulator from '../Simulator'
import SinglePattern from './SinglePattern'
import Color from '../Color'

export default class Snake extends SinglePattern {

	row: number
	col: number
	maxRadius: number = 5
	currentRadius: number = 1

	constructor(simulator: Simulator, row: number, col: number) {
		super(simulator);
		this.row = row;
		this.col = col;
	}

	tick() {
		if (this.currentRadius >= this.maxRadius) {
			console.log("DONE")
			return false;
		}
		this.simulator.setLED(this.row, this.col, new Color(100, 200, 50))
		
		for (let i = 1; i < this.currentRadius; i++) {
			// Q1
			this.simulator.setLED(this.row - i, this.col + i, new Color(100, 200, 50))
			// Q2
			this.simulator.setLED(this.row - i, this.col - i, new Color(100, 200, 50))
			// Q3
			this.simulator.setLED(this.row + i, this.col - i, new Color(100, 200, 50))
			// Q4
			this.simulator.setLED(this.row + i, this.col + i, new Color(100, 200, 50))
		}
		this.currentRadius++;
		return true
	}
}
