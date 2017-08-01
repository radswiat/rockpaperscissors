import { Defer, stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import renderer from 'core/renderer/renderer';
import State from 'core/state/state';

import template from './gesture-pick.html';

export default class GesturePick {

	screenId = 'gesturePick';

	/**
	 * Run stage
	 * @returns {Promise.<Defer|*>}
	 */
	async run(i) {
		this.i = i;
		// create stage run promise
		this.deferedStageRun = new Defer();

		this.handleStageStart();

		return this.deferedStageRun.promise;
	}


	/**
	 * Handle stage start
	 */
	handleStageStart() {
		// clear renderer view
		renderer.clear();

		// show new screen
		renderer.showScreen(this.screenId);

		// get screen content
		this.content = document.getElementById('screen--game-pick-gesture');

		this.render();

		this.bindEventListeners();
	}

	/**
	 * Handle stage end
	 */
	handleStageEnd() {
		renderer.clear();
		this.deferedStageRun.resolve();
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
	 * - todo: what if player is a computer?
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
		this.content.appendChild(stringToHtmlNode(template));
		this.content.appendChild(stringToHtmlNode(`<div>${this.i}</div>`));
	}

}
