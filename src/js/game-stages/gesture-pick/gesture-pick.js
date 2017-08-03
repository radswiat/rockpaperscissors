import GesturePickHuman from './sub-components/gesture-pick-human';
import GesturePickComputer from './sub-components/gesture-pick-computer';
import GesturePickSocket from './sub-components/gesture-pick-socket';

/**
 * Gesture pick interface
 * - this class is a interface between different types of gesture-picks
 * - decide what gesture-pick to run based on player
 * Class pattern is used to be consistent with other stages
 * @class
 */
export default class GesturePickInterface {

  constructor(player) {
    this.player = player;
  }

  /**
   * Run stage
   * - decide which class should be used
   * - create new instance
   * - run and return
   * @returns {Promise.<Defer|*>}
   */
  run() {
    if (this.player.type === 'human') {
      let gesturePickHuman = new GesturePickHuman(this.player);
      return gesturePickHuman.run();
    }

    if (this.player.type === 'socket') {
      let gesturePickSocket = new GesturePickSocket(this.player);
      return gesturePickSocket.run();
    }

    let gesturePickComputer = new GesturePickComputer(this.player);
    return gesturePickComputer.run();
  }
}
