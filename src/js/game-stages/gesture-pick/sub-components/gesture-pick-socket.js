import GesturePickCore from './gesture-pick-core';
import Sockets from 'core/sockets/sockets';

// import template
import template from './gesture-pick-socket.ejs';

export default class GesturePickSocket extends GesturePickCore {

  /**
   * Run
   * @public
   * @override run
   * @returns {Promise.<Defer|*>}
   */
  run() {
    return super.run();
  }

  /**
   * Handle stage start
   * @private
   * @override handleStageStart
   */
  handleStageStart() {
    super.handleStageStart();
    this.render();
    this.handleGesturePick();
  }

  /**
   * Handle stage start
   * @private
   * @override handleStageEnd
   */
  handleStageEnd() {
    super.handleStageEnd();
  }

  /**
   * Handle gesture pick
   * - choose AI to be used ( depends on difficulty setting )
   * - async as to be future proof
   */
  async handleGesturePick() {
    Sockets.once('selected:gesture', (gestureType) => {
      this.player.pickedGestureType = gestureType;
      this.handleStageEnd();
    });
  }

  /**
   * Render html
   * @override render
   */
  render() {
    super.render(template);
  }

}
