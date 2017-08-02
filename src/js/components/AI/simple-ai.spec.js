/* global it, describe */
import { expect } from 'chai';
import SimpleAI from './simple-ai';

describe('js/components/AI/simple-ai.js', () => {

	let ai = new SimpleAI();

	it('should return promise on run method', () => {
		expect(ai.pickGesture()).to.have.property('then');
	});

	it('should return promise on run method', async () => {
		let pick = await ai.pickGesture();
		expect(pick).to.be.oneOf(['paper', 'rock', 'scissors']);
	}).timeout(1000);
});
