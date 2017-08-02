import '../css/main.scss';

import Game from 'core/game/game';

class GameUiInterface {

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

	// handlePlayerVsComputerGame = () => {
	// 	new Game({
	// 		players: [
	// 			{
	// 				id: 0,
	// 				type: 'human',
	// 				name: 'Player 1'
	// 			},
	// 			{
	// 				id: 1,
	// 				type: 'computer',
	// 				name: 'Computer 1',
	// 				difficulty: 1
	// 			}
	// 		]
	// 	});
	// };
	// handleComputerVsComputerGame = () => {
	// 	new Game({
	// 		players: [
	// 			{
	// 				id: 0,
	// 				type: 'computer',
	// 				name: 'Computer 1',
	// 				difficulty: 1
	// 			},
	// 			{
	// 				id: 1,
	// 				type: 'computer',
	// 				name: 'Computer 2',
	// 				difficulty: 1
	// 			}
	// 		]
	// 	});
	// };

}


GameUiInterface.bootstrap();
