/* global it, describe, before */
import { expect } from 'chai';
import SimpleAI from './simple-ai';
import Store from '../../core/store/store';

describe('js/components/AI/simple-ai.js', () => {

	let ai = new SimpleAI();

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
		expect(pick).to.be.oneOf(['wofl', 'paper', 'rock', 'scissors']);
	}).timeout(1000);

	it('should return a falling probability', async () => {
		let stats = {};
		for (let j = 0; j <= 100000; j++) {
			let pick = await ai.pickGesture(0);
			stats[pick] = 1 + (stats[pick] || 0);
		}
		expect(stats.paper).to.be.least(30000);
	}).timeout(10000);

});
