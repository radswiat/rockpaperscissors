import { getUniformRandomNumber } from 'core/utils/utils';
import Store from 'core/store/store';

/**
 * Hard AI
 * - make a move based on statistics
 * TODO:
 * - it should count draws into stats
 * - it should only count player moves
 * - it should count timestamp when making decision
 * - it should be based on global statistic with more info about player ( age, gender etc )
 */
export default class HardAI {

	/**
	 * Pick gesture
	 * @return {Promise}
	 */
	async pickGesture() {
		// return promise to support future, more complex calculations or api calls
		return new Promise((resolve) => {
			// use timeout to simulate AI thinking time :)
			setTimeout(() => {
				let mostPopularGesture = this.getMostPopularGesture();

				// if none is popular, make a random move
				if (!mostPopularGesture) {
					let random = getUniformRandomNumber(1, 3);
					resolve(['paper', 'scissors', 'rock'][random]);
					return;
				}

				let bestGesture = this.getCounterGesture(mostPopularGesture);
				resolve(bestGesture);
			});
		});
	}

	/**
	 * Gest most popular gesture
	 * - get stats from store
	 * - check which gesture is most popular
	 * @return {string}
	 */
	getMostPopularGesture() {
		let popularity = {};

		// get stats from store
		let stats = Store.getState('stats');

		// count gesture popularity
		stats.map((pick) => {
			popularity[pick] = 1 + (popularity[pick] || 0);
		});

		// popularity to array
		let max = 0;
		let bestMove = null;
		Object.keys(popularity).map((index) => {
			if (popularity[index] > max) {
				bestMove = index;
				max = popularity[index];
			} else if (popularity[index] === max) {
				bestMove = null;
			}
		});

		return bestMove;
	}

	/**
	 * Get counter gesture
	 * @param gesture
	 * @return {string}
	 */
	getCounterGesture(gesture) {
		let gestures = {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		};
		return	 Object.keys(gestures).filter((key) => gestures[key].indexOf(gesture) >= 0)[0];
	}
}
