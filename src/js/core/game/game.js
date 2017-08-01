// import StageGameSelect from 'stages/game-select/game-select';
import StageGesturePick from 'stages/gesture-pick/gesture-pick';

export default class Game {

	constructor() {
		console.warn('construct game');
		this.start();
	}

	async start() {
		let stageGesturePick = new StageGesturePick();
		await stageGesturePick.run();
		console.log('pick done');
	}

}
