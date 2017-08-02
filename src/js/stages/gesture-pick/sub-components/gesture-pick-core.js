import { Defer } from 'core/utils/utils';
import view from 'core/view/view';
import { stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';

export default class GesturePickCore {

	// stage screen id
	screenHtmlId = 'screen--game-pick-gesture';

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
		view.clear();

		// show new screen
		view.show(this.screenHtmlId);

		// get view content
		this.content = view.getContent(this.screenHtmlId);
	}

	/**
	 * Handle stage end
	 */
	handleStageEnd() {
		view.clear();
		// set new store state
		Store.setState({
			[this.player.id]: this.player
		});
		// resolve stage
		this.deferedStageRun.resolve();
	}

	/**
	 * Render
	 * @param template
	 * @param data
	 */
	render(template, data = {}) {
		// merge data with original player data
		data = Object.assign(this.player, data);
		clearAllNodes(this.content);
		let html = stringToHtmlNode(template(data));
		this.content.appendChild(html);
	}
}

