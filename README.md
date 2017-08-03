# Rock Paper Scissors Game


`This is modified version of the game with a prototype of multipler game`


## Features
* Multiplayer game using sockets.io
* Unlimited number of players
* Eliminations mode for more then 2 players game
* Three difficulty levels for computer players
* Component based architecture
* Easiness of adding new stages
* Easiness of adding new gestures

## Architecture design

Game has been design in favor of **component-based** architecture having in mind microservices-based.
Components and game-stages are separate from each other with one binding point - store.
Every stage can work on its own and if application Store will stay correct they can me interchanged, 
added or removed without breaking the game.

## Elegant and simple
Solution is clean, simple and elegant but in no case lightweight. Decent folder structure, modularity,
class based patterns are solid base for extending the app to handle much richer application.

## Development decisions
* EJS templating language
	* Decision over using EJS has been made in favour of spending more time on flexibility and architecture of the app.
	Templating makes the game simpler and cleaner - if not, I would probably spend time on writing my own one.
* Mocha-webpack over karma
	* Decision to use mocha-webpack was made based on simplicity - it barely needs any configuration.
	Lack of DOM can be fulfilled by dom.js package.
* Tests inside modules/components folders
	* modules and components should be self-sufficient as much as possible.
	Bearing that in mind moving spec files ( which are part of the component/modules ) was natural decision.

## Add new gestures ( ex: Lizard )
New gesture can be introduced by changing configuration file of the game types:

`/src/js/config/game-modes.js`

In here you can change:
* Amount of players
* Computer difficulty script ( from 0 to 2 )
* Gestures

**Example** of player-commuter game of Rock Paper Scissors Wolf where wolf beats paper and rock.

```
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
```

## Add new stage
To add new stage just create a new stage under `src/js/game-stages.js`

Stage should implement `run` method that returns a `promise`

It is a good practice to keep it similar to existing stages.

Stage should be then used inside a game loop at: `src/js/core/game.js`

**TODO**: A interface should be created for every stage.
