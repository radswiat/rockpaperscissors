/* global it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import GesturesRevealStage from './gestures-reveal';

describe('js/stages/gestures-reveal/gestures-reveal.js', () => {

  let gesturesRevealStage = new GesturesRevealStage();
  let handleStageStartSpy = sinon.stub(gesturesRevealStage, 'handleStageStart');

  it('should have screenHtmlId property', () => {
    expect(gesturesRevealStage.screenHtmlId).to.not.be.undefined;
  });

  it('should return promise on run method', () => {
    expect(gesturesRevealStage.run()).to.have.property('then');
  });

  it('should have called handleStageStart()', () => {
    expect(handleStageStartSpy.callCount).to.be.equal(1);
  });

});
