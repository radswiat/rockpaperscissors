import { stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';
import GesturePick from './gesture-pick';

// import AI components
import SimpleAI from 'components/AI/simple-ai';

// import template
import template from './gesture-pick-computer.html';

export default class GesturePickComputer extends GesturePick {

	/**
	 * Run
	 * @public
	 * @implements run
	 * @returns {Promise.<Defer|*>}
	 */
	run() {
		return super.run();
	}

	/**
	 * Handle stage start
	 * @private
	 * @implements handleStageStart
	 */
	handleStageStart() {
		super.handleStageStart();
		this.render();
		this.calculateAIPick();
	}

	/**
	 * Handle stage start
	 * @private
	 * @implements handleStageEnd
	 */
	handleStageEnd() {
		super.handleStageEnd();
	}

	/**
	 * Calculate AI pick
	 * - choose AI to be used ( depends on difficulty setting )
	 * - async as to be future proof
	 */
	async calculateAIPick() {
		let simpleAi = new SimpleAI();
		let gestureType = await simpleAi.pickGesture();
		Store.setState({
			[this.player.id]: gestureType
		});
		this.handleStageEnd();
	}

	/**
	 * Render html
	 */
	render() {
		clearAllNodes(this.content);
		let html = stringToHtmlNode(template);
		html.getElementsByClassName('player-name')[0].innerHTML = this.player.name;
		this.content.appendChild(html);
	}

}
