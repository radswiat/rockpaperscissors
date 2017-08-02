import '../css/main.scss';

import Game from 'core/game/game';

export default class GameUiInterface {

	static bootstrap() {
		new GameUiInterface();
	}

	constructor() {
		this.bindEvents();
	}

	bindEvents() {
		document.getElementById('start-game').addEventListener('click', this.handleGameStart);
	}

	handleGameStart = () => {
		let game = new Game();
		game.start();
	};

}


GameUiInterface.bootstrap();
