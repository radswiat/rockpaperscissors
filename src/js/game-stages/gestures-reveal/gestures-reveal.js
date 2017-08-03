import { Defer, stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';
import view from 'core/view/view';

import template from './gestures-reveal.ejs';

/**
 * Winner board stage
 * - get all players picks
 * - find a winner
 * - supports tournament type when more then 2 players
 * @class
 */
export default class GesturesReveal {

  screenHtmlId = 'screen--game-gestures-reveal';

  async run() {
    // create stage run promise
    this.deferedStageRun = new Defer();

    this.handleStageStart();

    return this.deferedStageRun.promise;
  }

  /**
   * Handle stage start
   * - show adequate screen
   * - display winner
   */
  handleStageStart() {
    // clear renderer view
    view.clear();

    // show new screen
    view.show(this.screenHtmlId);

    // get screen content
    this.content = view.getContent(this.screenHtmlId);

    this.render({
      players: Store.getState('players')
    });
  }

  /**
   * Handle stage end
   * - clear view
   * - resolve stage
   */
  handleStageEnd() {
    view.clear();
    this.deferedStageRun.resolve();
  }

  /**
   * Render
   * @param template
   * @param data
   */
  render(data) {
    let html = stringToHtmlNode(template(data));
    clearAllNodes(this.content);
    this.content.appendChild(html);
    this.bindContinueBtn();
  }

  /**
   * Bind reset btn event
   * - reset will trigger handleStageEnd
   * - stage will close, and game should carry to next step ( or to the end )
   */
  bindContinueBtn() {
    this.content.getElementsByClassName('button')[0].addEventListener('click', () => {
      this.handleStageEnd();
    });
  }

}
