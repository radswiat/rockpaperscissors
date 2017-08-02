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
	 * - show adequate screen
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
	 * - clear view
	 * - resolve stage
	 */
	handleStageEnd() {
		view.clear();
		// set new store state
		let players = Store.getState('players');
		players[this.player.id] = this.player;
		Store.setState({
			players
		});
		// resolve stage
		this.deferedStageRun.resolve();
	}

	/**
	 * Render
	 * @param template
	 * @param data
	 */
	render(template, playerData = {}) {
		// merge data with original player data
		playerData = Object.assign(this.player, playerData);
		clearAllNodes(this.content);
		let html = stringToHtmlNode(template({
			player: playerData,
			gestures: Object.keys(Store.getState('gameMode').gestures)
		}));
		this.content.appendChild(html);
	}
}

