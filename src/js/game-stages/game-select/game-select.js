import { Defer, isDefined } from 'core/utils/utils';
import view from 'core/view/view';
import { stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';
import configGameModes from './config-game-modes';

import template from './game-select.ejs';

/**
 * Select game stage
 * - allow player to select a game type
 * - store game type in store once finished
 * @class
 */
export default class GameSelectStage {

	// stage screen id
	screenHtmlId = 'screen--game-select';

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
	 * - render view
	 */
	handleStageStart() {
		// clear renderer view
		view.clear();

		// show new screen
		view.show(this.screenHtmlId);

		// get view content
		this.content = view.getContent(this.screenHtmlId);

		this.render();
		this.bindEvents();
	}

	/**
	 * Handle stage end
	 * - clear view
	 * - resolve stage
	 */
	handleStageEnd() {
		view.clear();
		// resolve stage
		this.deferedStageRun.resolve();
	}

	/**
	 * Render
	 * @param template
	 * @param data
	 */
	render() {
		clearAllNodes(this.content);
		let html = stringToHtmlNode(template({}));
		this.content.appendChild(html);
	}

	bindEvents() {
		let gameModesBtns = this.content.getElementsByClassName('button');
		for (let btn of gameModesBtns) {
			btn.addEventListener('click', this.handleGameModeSelected);
		}
	}

	handleGameModeSelected = (event) => {
		let gameModeType = event.target.getAttribute('type');
		// check if config exists
		if (!isDefined(configGameModes[gameModeType])) {
			throw new Error('game config does not exists!');
		}
		Store.setState({
			gameMode: configGameModes[gameModeType],
			players: {}
		});
		this.handleStageEnd();
	}

}
