import Simulator from '../Simulator'
import SinglePattern from './SinglePattern'
import Color from '../Color'

export default class Snake extends SinglePattern {

	row = 0
	col = 0
	forward = true

	constructor(simulator: Simulator) {
		super(simulator);
		this.row = 0;
		this.col = 0;
	}

	private progress() {
		this.col += this.forward ? 1 : -1;
	}

	private columnBoundry() {
		return this.forward ? this.simulator.dimension - 1 : 0;
	}

	tick() {
		if (this.col === this.columnBoundry()) {
			this.row++;
			this.forward = !this.forward;
		}
		// Done
		if (this.row > this.simulator.dimension) {
			return false;
		}
		this.progress();

		this.simulator.setLED(this.row, this.col, new Color(255, 100, 100))
		return true;
	}
}
