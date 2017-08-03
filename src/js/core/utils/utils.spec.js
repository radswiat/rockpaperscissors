/* global it, describe */
import { expect } from 'chai';
import { isDefined, stringToHtmlNode, Defer, getUniformRandomNumber } from './utils';

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

  describe('getUniformRandomNumber', () => {
    it('should be uniform random number', () => {
      let stats = {
        0: 0,
        1: 0,
        2: 0
      };
      for (let i = 35000; i; i--) {
        let w = getUniformRandomNumber(-1, 3);
        stats[w]++;
      }
      expect(stats[0]).to.be.least(10000);
      expect(stats[1]).to.be.least(10000);
      expect(stats[2]).to.be.least(10000);
    });
  });
});
