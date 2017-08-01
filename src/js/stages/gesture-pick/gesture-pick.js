import { Defer, stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import renderer from 'core/renderer/renderer';


export default class GesturePick {

	screenId = 'gesturePick';

	constructor(player) {
		this.player = player;
	}

	/**
	 * Run stage
	 * @returns {Promise.<Defer|*>}
	 */
	async run() {
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
	}

	/**
	 * Handle stage end
	 */
	handleStageEnd() {
		renderer.clear();
		this.deferedStageRun.resolve();
	}

}
