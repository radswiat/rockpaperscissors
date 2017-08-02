import { getUniformRandomNumber } from 'core/utils/utils';

/**
 * Simple AI
 * - it has to be simple, so it can't be completely random :)
 * - it will be 60% of rock, 30% of paper and 10% of scissors
 */
export default class SimpleAI {
	async pickGesture() {
		// return promise to support future, more complex calculations or api calls
		return new Promise((resolve) => {
			// use timeout to simulate AI thinking time :)
			setTimeout(() => {
				let random = getUniformRandomNumber(0, 100);

				if (random <= 60) {
					resolve('rock');
					return;
				}

				if (random >= 90) {
					resolve('scissors');
					return;
				}

				resolve('paper');
			}, 500);
		});
	}
}
