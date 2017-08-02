/* global it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import GameSelectStage from './game-select';
import Store from 'core/store/store';

describe('js/stages/game-select/game-select.js', () => {

	let gameSelectStage = new GameSelectStage();
	let handleStageStartSpy = sinon.stub(gameSelectStage, 'handleStageStart');

	it('should have screenHtmlId property', () => {
		expect(gameSelectStage.screenHtmlId).to.not.be.undefined;
	});

	it('should return promise on run method', () => {
		expect(gameSelectStage.run()).to.have.property('then');
	});

	it('should have called handleStageStart()', () => {
		expect(handleStageStartSpy.callCount).to.be.equal(1);
	});

	it('should set store state', () => {
		let el = document.createElement('div');
		let attr = document.createAttribute('type');
		attr.value = 'player-computer-easy';
		el.setAttributeNode(attr);
		gameSelectStage.handleGameModeSelected({
			target: el
		});
		expect(Store.getState('gameMode')).to.not.be.undefined;
	});

	it('should throw missing config error', () => {
		let el = document.createElement('div');
		let attr = document.createAttribute('type');
		attr.value = 'player-non-existing-config';
		el.setAttributeNode(attr);
		expect(() => {
			gameSelectStage.handleGameModeSelected({
				target: el
			});
		}).to.throw('game config does not exists!');
	});

});

