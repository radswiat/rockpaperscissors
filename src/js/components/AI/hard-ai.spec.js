/* global it, describe, before */
import { expect } from 'chai';
import HardAI from './hard-ai';
import Store from '../../core/store/store';

describe('js/components/AI/hard-ai.js', () => {

  let ai = new HardAI();

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
  }).timeout(1000);
});
