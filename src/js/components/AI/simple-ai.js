export default class SimpleAI {
	async pickGesture() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('paper');
			}, 500);
		});
	}
}
