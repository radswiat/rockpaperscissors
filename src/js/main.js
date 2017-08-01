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
		console.log('player vs player');
		new Game();
	};

	handlePlayerVsComputerGame = () => {
		console.log('player vs computer');
	};

	handleComputerVsComputerGame = () => {
		console.log('computer vs computer');
	};

}


GameUiInterface.bootstrap();
