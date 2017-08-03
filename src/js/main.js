import '../css/main.scss';
import 'core/utils/polyfill';

import Game from 'core/game/game';

/**
 * Game UI Interface
 * - handle first screen / welcome screen
 * - start game on btn click
 */
export default class GameUiInterface {

	static bootstrap() {
		new GameUiInterface();
	}

	constructor() {
		this.bindEvents();
	}

	bindEvents() {
		document.getElementById('start-game').addEventListener('click', this.handleGameStart);
		document.getElementById('start-game-simple').addEventListener('click', this.handleSimpleGameStart);
	}

	handleGameStart = () => {
		let game = new Game();
		game.start();
	};

	handleSimpleGameStart = () => {
		let simpleGame = new Game();
		simpleGame.startSimple();
	};

}


GameUiInterface.bootstrap();
