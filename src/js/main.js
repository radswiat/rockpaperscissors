import '../css/main.scss';
import systemConfig from 'config/system';

import Game from 'core/game/game';

class GameUiInterface {

	static bootstrap() {
		new GameUiInterface();
	}

	constructor() {
		this.bindUiControls();
	}

	bindUiControls() {
		document.getElementById(systemConfig.UI.buttons.playerVsPlayerGameId)
			.addEventListener('click', this.handlePlayerVsPlayerGame);
		document.getElementById(systemConfig.UI.buttons.playerVsComputerGameId)
			.addEventListener('click', this.handlePlayerVsComputerGame);
		document.getElementById(systemConfig.UI.buttons.computerVsComputerGameId)
			.addEventListener('click', this.handleComputerVsComputerGame);
	}

	handlePlayerVsPlayerGame = () => {
		new Game({
			players: [
				{
					id: 0,
					type: 'human',
					name: 'Player 1'
				},
				{
					id: 1,
					type: 'human',
					name: 'Player 2'
				}
			]
		});
	};

	handlePlayerVsComputerGame = () => {
		new Game({
			players: [
				{
					id: 0,
					type: 'human',
					name: 'Player 1'
				},
				{
					id: 1,
					type: 'computer',
					name: 'Computer 1',
					difficulty: 1
				}
			]
		});
	};

	handleComputerVsComputerGame = () => {
		new Game({
			players: [
				{
					id: 0,
					type: 'computer',
					name: 'Computer 1',
					difficulty: 1
				},
				{
					id: 1,
					type: 'computer',
					name: 'Computer 2',
					difficulty: 1
				}
			]
		});
	};

}


GameUiInterface.bootstrap();
