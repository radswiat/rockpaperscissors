import GesturePickCore from './gesture-pick-core';

// import AI components
import SimpleAI from 'components/AI/simple-ai';
import MediumAI from 'components/AI/medium-ai';
import HardAI from 'components/AI/hard-ai';

// import template
import template from './gesture-pick-computer.ejs';

/**
 * Gesture Pick Computer
 * - this class extends GesturePickCore
 * - it implements methods of original class what makes it easy extend or change behaviour
 * Generally it gets the gesture from a AI
 * - once AI pick gesture handleStageEnd() is called and stage promise resolves
 */
export default class GesturePickComputer extends GesturePickCore {

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
		// TODO: this can be done better, no error catching etc
		let AIClass = [SimpleAI, MediumAI, HardAI][this.player.difficulty];
		let simpleAi = new AIClass();
		let gestureType = await simpleAi.pickGesture();
		this.player.pickedGestureType = gestureType;
		this.handleStageEnd();
	}

	/**
	 * Render html
	 * @override render
	 */
	render() {
		super.render(template);
	}

}
