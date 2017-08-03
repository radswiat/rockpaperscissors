/* global it, describe, before */
import { expect } from 'chai';
import MediumAI from './medium-ai';
import Store from '../../core/store/store';

describe('js/components/AI/medium-ai.js', () => {

	let ai = new MediumAI();

	before(() => {
		Store.clear();
		Store.setState({
			gameMode: {
				gestures: {
					paper: ['rock'],
					rock: ['scissors'],
					scissors: ['paper', 'wolf'],
					wolf: ['paper', 'rock']
				}
			}
		});
	});

	it('should return promise on run method', () => {
		expect(ai.pickGesture(0)).to.have.property('then');
	});

	it('should return promise on run method', async () => {
		let pick = await ai.pickGesture(0);
		expect(pick).to.be.oneOf(['wolf', 'paper', 'rock', 'scissors']);
	});
});
