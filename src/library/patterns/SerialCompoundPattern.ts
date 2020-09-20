import Pattern from './Pattern'
import CompoundPattern from './CompoundPattern'
import Simulator from '../Simulator'

export default abstract class SerialCompoundPattern extends CompoundPattern {

	simulator: Simulator
	currentPattern = 0

	constructor(simulator: Simulator, patterns: Pattern[]) {
		super(simulator, patterns)
		this.simulator = simulator
	}

	next(): boolean {
		if (this.currentPattern >= this.patterns.length) {
			return false
		}

		let hasNext = this.patterns[this.currentPattern].next()
		if (!hasNext) {
			this.currentPattern++;
			return this.next();
		}

		return true
	}
}