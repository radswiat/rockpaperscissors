// control application state
// - singleton, but capable of resetting
export default class State {

	static __state = {
		stats: []
	};

	constructor() {
		throw Error('State should not be instantiated');
	}

	static getState(state) {
		if (!state) {
			return State.__state;
		}
		return State.__state[state] || {};
	}

	static setState(state) {
		Object.assign(State.__state, state);
	}

}

