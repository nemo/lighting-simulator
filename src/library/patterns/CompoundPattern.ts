import Pattern from './Pattern'
import Simulator from '../Simulator'

export default abstract class CompoundPattern extends Pattern {

	simulator: Simulator
	patterns: Pattern[] = []

	constructor(simulator: Simulator, patterns: Pattern[]) {
		super(simulator);
		this.simulator = simulator;
		this.patterns = patterns;
	}
}