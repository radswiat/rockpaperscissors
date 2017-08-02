import { Defer } from 'core/utils/utils';
import renderer from 'core/renderer/renderer';
import { stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';

export default class GesturePickCore {

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
		// set new store state
		Store.setState({
			[this.player.id]: this.player
		});
		// resolve stage
		this.deferedStageRun.resolve();
	}

	render(template, data = {}) {
		// merge data with original player data
		data = Object.assign(this.player, data);
		clearAllNodes(this.content);
		let html = stringToHtmlNode(template(data));
		this.content.appendChild(html);
	}
}

