import GesturePickCore from './gesture-pick-core';

import template from './gesture-pick-human.ejs';

/**
 * Gesture Pick Human
 * - this class extends GesturePickCore
 * - it implements methods of original class what makes it easy extend or change behaviour
 * Generally it gets the gesture from a UI, allowing user to pick
 * - once user pick gesture handleStageEnd() is called and stage promise resolves
 */
export default class GesturePickHuman extends GesturePickCore {

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
		this.bindEventListeners();
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
	 * @param event
	 */
	handleGesturePick = (event) => {
		let gestureType = event.target.getAttribute('type');
		this.player.pickedGestureType = gestureType;
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
	 * @override render
	 */
	render() {
		super.render(template);
	}

}
