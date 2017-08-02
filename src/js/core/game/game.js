import Store from 'core/store/store';

import StageGameSelect from 'stages/game-select/game-select';
import StageGesturePick from 'stages/gesture-pick/gesture-pick';
import StageWinnerBoard from 'stages/winner-board/winner-board';

/**
 * Game
 * - game is split into separate stages
 * - each stage is a standalone module
 * - stages share app state by a store
 * - each stage has a async run(), when resolved, game will go to next stage
 * - todo: store is not reset after game ends - can be an issue later
 */
export default class Game {

	async start() {

		// stage 1 - game select
		let stageGameSelect = new StageGameSelect();
		await stageGameSelect.run();

		// stage 2 - gesture pick
		// run this stage for each player ( human and computer )
		for (let player of Store.getState('gameMode').players) {
			let stageGesturePick = new StageGesturePick(player);
			await stageGesturePick.run();
		}

		// stage 3
		// lets skip this one, we gonna add this later on


		// stage 4 - winner-board
		let stageWinnerBoard = new StageWinnerBoard();
		await stageWinnerBoard.run();

		// reset game when finished
		this.start();
	}

}
