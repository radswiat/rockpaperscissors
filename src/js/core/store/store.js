/**
 * Application Store
 * - holds application states
 * - can be cleared
 * - getState and setState should be the only ways to read/write data
 * @singleton
 * @static
 */
export default class Store {

  static __state = {
    stats: []
  };

  constructor() {
    throw Error('State should not be instantiated');
  }

  /**
   * Clear state
   * - return to pristine value
   */
  static clear() {
    Store.__state = {
      stats: []
    };
  }

  /**
   * Get state
   * @param state
   * @return {*}
   */
  static getState(state) {
    if (!state) {
      return Store.__state;
    }
    return Store.__state[state] || {};
  }

  /**
   * Set state
   * @param state
   */
  static setState(state) {
    for (let key of Object.keys(state)) {
      Store.__state[key] = state[key];
    }
  }

}

