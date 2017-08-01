import GesturePick from './gesture-pick';
import { Defer, stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import renderer from 'core/renderer/renderer';
import State from 'core/state/state';

import template from './gesture-pick-human.html';

export default class GesturePickHuman extends GesturePick {

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
		this.bindEventListeners();
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
	 * Handle gesture pick
	 * @param event
	 */
	handleGesturePick = (event) => {
		let gestureType = event.target.getAttribute('type');
		State.setState({
			gestureType
		});
		this.handleStageEnd();
	};


	/**
	 * Bind event listeners
	 * bind event to possible gesture picks
	 */
	bindEventListeners() {
		let gestureElements = this.content.getElementsByClassName('gesture');
		for (let element of gestureElements) {
			element.addEventListener('click', this.handleGesturePick);
		}
	}

	/**
	 * Render html
	 */
	render() {
		clearAllNodes(this.content);
		this.content.appendChild(stringToHtmlNode(`<div>Player: ${this.player.name}</div>`));
		this.content.appendChild(stringToHtmlNode(template));
	}

}
