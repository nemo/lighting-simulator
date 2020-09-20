import Pattern from './Pattern'

export default abstract class SinglePattern extends Pattern {

	done = false

	next() {
		if (this.done) {
			return false;
		}
		this.done = !this.tick();
		return !this.done;
	}

	abstract tick(): boolean;
}