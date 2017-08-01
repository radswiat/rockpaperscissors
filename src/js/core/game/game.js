// import StageGameSelect from 'stages/game-select/game-select';
import StageGesturePickHuman from 'stages/gesture-pick/gesture-pick-human';
import StageGesturePickComputer from 'stages/gesture-pick/gesture-pick-computer';

export default class Game {

	constructor() {
		console.warn('construct game');
		this.start();
	}

	async start() {

		// hardcoded game config
		// todo: should be passed into Game constructor
		let gameConfig = {
			players: [
				{
					id: 0,
					type: 'human',
					name: 'Some name'
				},
				{
					id: 1,
					type: 'computer',
					name: null,
					difficulty: 1
				}
			]
		};

		// stage 1 - gesture pick
		for (let player of gameConfig.players) {
			if (player.type === 'human') {
				let stageGesturePick = new StageGesturePickHuman(player);
				await stageGesturePick.run();
			} else if(player.type === 'computer') {
				let stageGesturePick = new StageGesturePickComputer(player);
				await stageGesturePick.run();
			}

		}
		// for (let i = 2; i; i--) {
		// 	let stageGesturePick = new StageGesturePick();
		// 	await stageGesturePick.run(i);
		// }


		console.log('pick done');
	}

}
