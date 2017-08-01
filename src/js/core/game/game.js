// import StageGameSelect from 'stages/game-select/game-select';
import StageGesturePickHuman from 'stages/gesture-pick/gesture-pick-human';
import StageGesturePickComputer from 'stages/gesture-pick/gesture-pick-computer';
import StageWinnerBoard from 'stages/winner-board/winner-board';

export default class Game {

	constructor() {
		console.warn('construct game');
		this.start();
	}

	async start() {

		// hardcoded game config
		// todo: should be passed into Game constructor
		let gameConfig = {
			players: [
				{
					id: 0,
					type: 'human',
					name: 'Player 1'
				},
				{
					id: 1,
					type: 'computer',
					name: null,
					difficulty: 1
				},
				{
					id: 2,
					type: 'human',
					name: 'Player 2'
				},
				{
					id: 3,
					type: 'computer',
					name: null,
					difficulty: 1
				}
			]
		};

		// stage 1 - gesture pick
		for (let player of gameConfig.players) {
			if (player.type === 'human') {
				let stageGesturePick = new StageGesturePickHuman(player);
				await stageGesturePick.run();
			} else if (player.type === 'computer') {
				let stageGesturePick = new StageGesturePickComputer(player);
				await stageGesturePick.run();
			}
		}

		// stage 2
		// lets skip this one, we gonna add this later on


		// stage 3 - winner-board
		let stageWinnerBoard = new StageWinnerBoard();
		await stageWinnerBoard.run();

		console.log('pick done');
	}

}
