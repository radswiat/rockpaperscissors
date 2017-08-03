import { getFallingRandomNumber } from 'core/utils/utils';
import Store from 'core/store/store';

/**
 * Simple AI
 * - it has to be easy, so it can't be completely random :)
 * - we can't hard code rules anymore as gestures are flexible
 * - we would use falling down probability
 * - algorithm probability test for 10000 cases:
 *    { paper: 9441, rock: 6269, scissors: 4869, wolf: 3990 }
 */
export default class SimpleAI {

  /**
   * Pick gesture interface method
   * - it was split due to unit testing ( we don't want timeout in unit tests )
   * @public
   * @return {Promise}
   */
  async pickGesture(timeout = 200) {

    // get available gestures
    let gestures = Store.getState('gameMode').gestures;

    let gesturesCount = Object.keys(gestures).length;

    // get falling random number
    let rnd = getFallingRandomNumber(gesturesCount, 4);

    // return promise to support future, more complex calculations or api calls
    return new Promise((resolve) => {
      // return without timeout - useful in unit tests
      if (!timeout) {
        resolve(Object.keys(gestures)[rnd]);
        return;
      }

      // use timeout to simulate AI thinking time :)
      setTimeout(() => {
        resolve(Object.keys(gestures)[rnd]);
      }, timeout);
    });
  }

}
