/* global it, describe */
import { expect } from 'chai';
import HardAI from './hard-ai';

describe('js/components/AI/hard-ai.js', () => {

	let ai = new HardAI();

	it('should return promise on run method', () => {
		expect(ai.pickGesture()).to.have.property('then');
	});

	it('should return promise on run method', async () => {
		let pick = await ai.pickGesture();
		expect(pick).to.be.oneOf(['paper', 'rock', 'scissors']);
	}).timeout(1000);
});
