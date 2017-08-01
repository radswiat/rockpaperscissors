class Renderer {

	constructor() {
		this.screens = {
			gameSelect: document.getElementById('screen--game-select'),
			gesturePick: document.getElementById('screen--game-pick-gesture')
		}
	}

	clear() {
		Object.keys(this.screens).map((screen) => this.hideScreen(screen));
	}

	showScreen(screenId) {
		this.screens[screenId].style.display = 'block';
	}

	hideScreen(screenId) {
		this.screens[screenId].style.display = 'none';
	}

	getScreenContent(screenId) {
		return this.screens[screenId];
	}

	displayPickGesture() {

	}

	displayRevealGestures() {

	}

	displayWinnerBoard() {

	}

}

export default new Renderer();
