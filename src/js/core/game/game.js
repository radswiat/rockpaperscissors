// import StageGameSelect from 'stages/game-select/game-select';
import StageGesturePick from 'stages/gesture-pick/gesture-pick';

export default class Game {

	constructor() {
		console.warn('construct game');
		this.start();
	}

	async start() {

		for (let i = 2; i; i--) {
			console.log('------ > ' + i)
			let stageGesturePick = new StageGesturePick();
			await stageGesturePick.run(i);
			console.log('------ > done ' + i)
		}


		console.log('pick done');
	}

}
