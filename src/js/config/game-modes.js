export default {
	'player-computer-wolf': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 0
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper', 'wolf'],
			wolf: ['paper', 'rock']
		}
	},
	'player-computer-easy': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 0
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	'player-computer-medium': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 1
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	'player-computer-hard': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 2
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	'player-player': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'human',
				name: 'Player 2',
				difficulty: 1
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	'computer-computer': {
		players: [
			{
				id: 0,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 0
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 2',
				difficulty: 2
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	'player-1-computer-10': {
		players: [
			{
				id: 0,
				type: 'human',
				name: 'Player 1'
			},
			{
				id: 1,
				type: 'computer',
				name: 'Computer 1',
				difficulty: 1
			},
			{
				id: 2,
				type: 'computer',
				name: 'Computer 2',
				difficulty: 1
			},
			{
				id: 3,
				type: 'computer',
				name: 'Computer 3',
				difficulty: 1
			},
			{
				id: 4,
				type: 'computer',
				name: 'Computer 4',
				difficulty: 1
			},
			{
				id: 5,
				type: 'computer',
				name: 'Computer 5',
				difficulty: 2
			},
			{
				id: 6,
				type: 'computer',
				name: 'Computer 6',
				difficulty: 1
			},
			{
				id: 7,
				type: 'computer',
				name: 'Computer 7',
				difficulty: 1
			},
			{
				id: 8,
				type: 'computer',
				name: 'Computer 8',
				difficulty: 1
			},
			{
				id: 9,
				type: 'computer',
				name: 'Computer 9',
				difficulty: 1
			},
			{
				id: 10,
				type: 'computer',
				name: 'Computer 10',
				difficulty: 1
			}
		],
		gestures: {
			paper: ['rock'],
			rock: ['scissors'],
			scissors: ['paper']
		}
	},
	basic: {
		gameMode: {
			players: [
				{
					id: 0,
					type: 'computer',
					name: 'Computer 1',
					difficulty: 2
				},
				{
					id: 1,
					type: 'computer',
					name: 'Computer 2',
					difficulty: 0
				}
			],
			gestures: {
				paper: ['rock'],
				rock: ['scissors'],
				scissors: ['paper', 'wolf'],
				wolf: ['paper', 'rock']
			}
		}
	}
};
