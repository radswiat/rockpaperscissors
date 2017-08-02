/* global it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import WinnerBoardStage from './winner-board';

describe('js/stages/winner-board/winner-board.js', () => {

	let winnerBoardStage = new WinnerBoardStage();
	let handleStageStartSpy = sinon.stub(winnerBoardStage, 'handleStageStart');

	it('should have screenHtmlId property', () => {
		expect(winnerBoardStage.screenHtmlId).to.not.be.undefined;
	});

	it('should return promise on run method', () => {
		expect(winnerBoardStage.run()).to.have.property('then');
	});

	it('should have called handleStageStart()', () => {
		expect(handleStageStartSpy.callCount).to.be.equal(1);
	});

	it('should call getWinner and return scissors', () => {
		let winner = winnerBoardStage.getWinner([
			{ id: 0, 	pickedGestureType: 'scissors'	},
			{ id: 1, 	pickedGestureType: 'paper' 		}
		]);
		expect(winner.id).to.be.equal(0);
	});

	it('should call getWinner and return paper', () => {
		let winner = winnerBoardStage.getWinner([
			{ id: 0, 	pickedGestureType: 'rock'		},
			{ id: 1, 	pickedGestureType: 'paper' 	}
		]);
		expect(winner.id).to.be.equal(1);
	});

	it('should call getWinner and return null ( draw )', () => {
		let winner = winnerBoardStage.getWinner([
			{ id: 0, 	pickedGestureType: 'rock'		},
			{ id: 1, 	pickedGestureType: 'rock' 		}
		]);
		expect(winner).to.be.equal(null);
	});

	it('should call getWinner and return null ( draw )', () => {
		let winner = winnerBoardStage.getWinner([
			{ id: 0, 	pickedGestureType: 'scissors'	},
			{ id: 1, 	pickedGestureType: 'paper' 		},
			{ id: 2, 	pickedGestureType: 'rock'			},
			{ id: 3, 	pickedGestureType: 'rock' 			},
			{ id: 4, 	pickedGestureType: 'paper'			},
			{ id: 5, 	pickedGestureType: 'scissors'	},
			{ id: 6, 	pickedGestureType: 'scissors'	},
			{ id: 7, 	pickedGestureType: 'rock' 			}
		]);
		expect(winner.id).to.be.equal(7);
	});

	it('should call getWinner and return null ( draw )', () => {
		let winner = winnerBoardStage.getWinner([
			{ id: 0, 	pickedGestureType: 'scissors'	},
			{ id: 1, 	pickedGestureType: 'paper' 		},
			{ id: 2, 	pickedGestureType: 'scissors'	},
			{ id: 3, 	pickedGestureType: 'paper' 		},
			{ id: 4, 	pickedGestureType: 'scissors'	},
			{ id: 5, 	pickedGestureType: 'paper' 		},
			{ id: 6, 	pickedGestureType: 'scissors'	},
			{ id: 7, 	pickedGestureType: 'paper' 		}
		]);
		expect(winner).to.be.equal(null);
	});

});
