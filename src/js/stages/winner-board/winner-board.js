import { Defer, stringToHtmlNode, clearAllNodes } from 'core/utils/utils';
import Store from 'core/store/store';
import view from 'core/view/view';

import template from './winner-board.ejs';

/**
 * Winner board stage
 * - get all players picks
 * - find a winner
 * - supports tournament type when more then 2 players
 * @class
 */
export default class WinnerBoard {

	screenHtmlId = 'screen--game-winner-board';

	async run() {
		// create stage run promise
		this.deferedStageRun = new Defer();

		this.handleStageStart();

		return this.deferedStageRun.promise;
	}

	/**
	 * Handle stage start
	 */
	handleStageStart() {
		// clear renderer view
		view.clear();

		// show new screen
		view.show(this.screenHtmlId);

		// get screen content
		this.content = view.getContent(this.screenHtmlId);

		this.displayWinner();
	}

	/**
	 * Handle stage end
	 */
	handleStageEnd() {
		view.clear();
		this.deferedStageRun.resolve();
	}

	/**
	 * Display winner
	 * - get all players from store
	 * - convert players object to array ( simplifies iterations )
	 * - get winner
	 * - call render
	 */
	displayWinner() {
		let playerStates = Store.getState('players');

		// convert playerStates to array
		let playerStatesArray = Object.keys(playerStates).map((player) => {
			return playerStates[player];
		});

		let winner = this.getWinner(playerStatesArray);
		this.render(template, {
			winner
		});
	}

	/**
	 * Get winner
	 * - recursive for all players
	 * - tournament type of play
	 * - compare pairs -> winner of each pair plays with winner of other pair
	 * - draw disqualifies from tournament
	 * @param players
	 * @param nextPlayers
	 * @returns {*}
	 */
	getWinner(players, nextPlayers = []) {
		// if no more pairs to play with each other
		if (!players.length) {
			// when we got a final winner
			if (nextPlayers.length === 1) {
				return nextPlayers[0];
			}
			// if nobody won
			if (nextPlayers.length === 0) {
				return null;
			}
			// start next stage of the tournament
			players = nextPlayers;
			nextPlayers = [];
		}

		let first = players.shift();
		let second = players.shift();
		let winner = this.getPairWinner(first, second);
		// disqualify if draw
		if (winner) {
			nextPlayers.push(winner);
		}
		return this.getWinner(players, nextPlayers);
	}

	/**
	 * Get winner of the pair of players
	 * - player vs player
	 * @param player1Gesture
	 * @param player2Gesture
	 * @returns {*}
	 */
	getPairWinner(player1, player2) {
		let gestures = {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		};

		if (player1.pickedGestureType === player2.pickedGestureType) {
			return null;
		}

		if (gestures[player1.pickedGestureType].indexOf(player2.pickedGestureType) >= 0) {
			return player1;
		}

		return player2;
	}

	/**
	 * Render
	 * @param template
	 * @param data
	 */
	render(template, data) {
		let html = stringToHtmlNode(template(data));
		clearAllNodes(this.content);
		this.content.appendChild(html);
		this.bindResetBtnEvent();
	}

	/**
	 * Bind reset btn event
	 * - reset will trigger handleStageEnd
	 * - stage will close, and game should carry to next step ( or to the end )
	 */
	bindResetBtnEvent() {
		this.content.getElementsByClassName('button')[0].addEventListener('click', () => {
			this.handleStageEnd();
		});
	}

}
