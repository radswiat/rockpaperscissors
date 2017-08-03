import Store from 'core/store/store';

import StageGameSelect from 'game-stages/game-select/game-select';
import StageGesturePick from 'game-stages/gesture-pick/gesture-pick';
import StageGesturesReveal from 'game-stages/gestures-reveal/gestures-reveal';
import StageWinnerBoard from 'game-stages/winner-board/winner-board';

import gameModes from 'config/game-modes';

/**
 * Game
 * - game is split into separate stages
 * - each stage is a standalone module
 * - stages share app state by a store
 * - each stage has a async run(), when resolved, game will go to next stage
 * - todo: store is not reset after game ends - can be an issue later
 */
export default class Game {

	/**
	 * Start game
	 * - every stage has 'run' method
	 * - run method returns promise, when resolved, game will go to next stage
	 * - every stage is a standalone component, memory is shared by Store
	 * - easy to add new stages
	 * @return {Promise.<void>}
	 */
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
		let stageGesturesReveal = new StageGesturesReveal();
		await stageGesturesReveal.run();

		// stage 4 - winner-board
		let stageWinnerBoard = new StageWinnerBoard();
		await stageWinnerBoard.run();

		// reset game when finished
		this.start();
	}

	/**
	 * Basic game mode
	 * - to show how easy is to change stages of the game
	 * - stages can work separately, they are just using Store as a only data point
	 * @return {Promise.<void>}
	 */
	async startSimple() {

		Store.clear();
		Store.setState(gameModes.basic);

		// stage 2 - gesture pick
		for (let player of Store.getState('gameMode').players) {
			let stageGesturePick = new StageGesturePick(player);
			await stageGesturePick.run();
		}

		// stage 4 - winner-board
		let stageWinnerBoard = new StageWinnerBoard();
		await stageWinnerBoard.run();

		// reset game when finished
		this.startSimple();
	}

}
