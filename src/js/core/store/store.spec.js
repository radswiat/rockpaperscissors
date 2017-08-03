/* global it, describe, before */
import { expect, assert } from 'chai';
import Store from './store';

describe('js/core/store/store.js', () => {

	before(() => {
		Store.clear();
	});

	it('should set test state', () => {
		Store.setState({
			test: 1
		});
		expect(Store.getState('test')).to.be.equal(1);
	});

	it('should set [A,B] state', () => {
		Store.setState({
			A: 2,
			B: 3
		});
		expect(Store.getState('A')).to.be.equal(2);
		expect(Store.getState('B')).to.be.equal(3);
	});

	it('should get whole store data', () => {
		assert.deepEqual(Store.getState(), {
			test: 1,
			A: 2,
			B: 3,
			stats: []
		});
	});

});
