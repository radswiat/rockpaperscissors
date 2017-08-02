/* global it, describe */
import { expect } from 'chai';
import { isDefined, stringToHtmlNode, Defer } from './utils';

describe('js/core/utils/utils.js', () => {

	describe('isDefined', () => {
		it('should return false for undefined variable', () => {
			expect(isDefined()).to.be.false;
		});
		it('should return true for defined variable', () => {
			expect(isDefined('')).to.be.true;
			expect(isDefined([])).to.be.true;
			expect(isDefined({})).to.be.true;
		});
	});

	describe('stringToHtmlNode', () => {
		it('should be node element', () => {
			let node = stringToHtmlNode('<div>A</div>');
			expect(typeof node).to.be.equal('object');
			expect(node.getElementsByClassName).to.not.be.undefined;
		});
	});

	describe('Defer', () => {
		it('should be a promise', () => {
			let promise = new Defer();
			expect(typeof promise).to.be.equal('object');
			expect(promise.resolve).to.not.be.undefined;
			expect(promise.reject).to.not.be.undefined;
		});
	});
});
