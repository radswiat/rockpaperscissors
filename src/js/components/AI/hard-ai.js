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
  async pickGesture(timeout = 200) {

    let pick = null;

    // get available gestures
    this.gestures = Store.getState('gameMode').gestures;

    let mostPopularGesture = this.getMostPopularGesture();

    // if none is popular, make a random move
    if (!mostPopularGesture) {
      let rnd = getUniformRandomNumber(1, 3);
      pick = Object.keys(this.gestures)[rnd];
    } else {
      pick = this.getCounterGesture(mostPopularGesture);
    }

    // return promise to support future, more complex calculations or api calls
    return new Promise((resolve) => {
      // return without timeout - useful in unit tests
      if (!timeout) {
        resolve(pick);
        return;
      }

      // use timeout to simulate AI thinking time :)
      setTimeout(() => {
        resolve(pick);
      }, timeout);
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
    return Object.keys(this.gestures).filter((key) => this.gestures[key].indexOf(gesture) >= 0)[0];
  }
}
