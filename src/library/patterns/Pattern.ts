import Simulator from '../Simulator'

export default abstract class Pattern {

	simulator: Simulator

	constructor(simulator: Simulator) {
		this.simulator = simulator;
	}

	abstract next(): boolean;
}