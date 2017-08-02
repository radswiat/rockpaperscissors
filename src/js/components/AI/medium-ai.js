import { getUniformRandomNumber } from 'core/utils/utils';

/**
 * Medium AI
 * - 33% chance for any gesture
 */
export default class SimpleAI {

	/**
	 * Pick gesture
	 * @return {Promise}
	 */
	async pickGesture() {
		// return promise to support future, more complex calculations or api calls
		return new Promise((resolve) => {
			// use timeout to simulate AI thinking time :)
			setTimeout(() => {
				let random = getUniformRandomNumber(-1, 3);
				resolve(['paper', 'scissors', 'rock'][random]);
			}, 200);
		});
	}
}
