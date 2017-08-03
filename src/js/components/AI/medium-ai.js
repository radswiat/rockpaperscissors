import { getUniformRandomNumber } from 'core/utils/utils';
import Store from 'core/store/store';

/**
 * Medium AI
 * - 33% chance for any gesture
 */
export default class SimpleAI {

	/**
	 * Pick gesture
	 * @return {Promise}
	 */
	async pickGesture(timeout = 200) {

		let gestures = Store.getState('gameMode').gestures;

		let rnd = getUniformRandomNumber(-1, Object.keys(gestures).length);

		// return promise to support future, more complex calculations or api calls
		return new Promise((resolve) => {
			// use timeout to simulate AI thinking time :)
			setTimeout(() => {
				resolve(Object.keys(gestures)[rnd]);
			}, timeout);
		});
	}
}
