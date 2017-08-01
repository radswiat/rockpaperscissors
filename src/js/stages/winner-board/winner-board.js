import { Defer, stringToHtmlNode } from 'core/utils/utils';
import Store from 'core/store/store';
import renderer from 'core/renderer/renderer';

import template from './winner-board.html';

export default class WinnerBoard {

	screenId = 'winnerBoard';

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
		renderer.clear();

		// show new screen
		renderer.showScreen(this.screenId);

		// get screen content
		this.content = document.getElementById('screen--game-winner-board');

		this.displayWinner();
	}

	/**
	 * Handle stage end
	 */
	handleStageEnd() {
		renderer.clear();
		this.deferedStageRun.resolve();
	}

	displayWinner() {
		let playerStates = Store.getState('players');

		// convert playerStates to array
		let playerStatesArray = Object.keys(playerStates).map((player) => {
			return playerStates[player];
		});

		let winner = this.getWinner(playerStatesArray);
		let html = stringToHtmlNode(template);
		html.getElementsByClassName('winner')[0].outerHTML = winner || 'draw';
		this.content.appendChild(html);
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
	getPairWinner(player1Gesture, player2Gesture) {
		let gestures = {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		};

		if (player1Gesture === player2Gesture) {
			return null;
		}

		if (gestures[player1Gesture].indexOf(player2Gesture) >= 0) {
			return player1Gesture;
		}

		return player2Gesture;
	}

}
