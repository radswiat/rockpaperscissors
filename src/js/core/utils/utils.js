export function clearAllNodes(node) {
	if (!node) {
		return false;
	}
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	return true;
}

export function stringToHtmlNode(string) {
	let div = document.createElement('div');
	div.innerHTML = string;
	return div.firstChild.cloneNode(true);
}

export function Defer() {
	this.promise = new Promise((resolve, reject) => {
		this.resolve = resolve;
		this.reject = reject;
	});
	this.promise.then = this.promise.then.bind(this.promise);
	this.promise.catch = this.promise.catch.bind(this.promise);
}

export function isDefined(val) {
	return typeof val !== 'undefined';
}

export function getUniformRandomNumber(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFallingRandomNumber(max, mod) {
	let rndNumber = null;
	for (let i = 0; i < max; i++) {
		if (getUniformRandomNumber(i - 1, max + (i * mod)) === i) {
			rndNumber = i;
		}
	}
	if (rndNumber === null) {
		rndNumber = getFallingRandomNumber(max, mod);
	}
	return rndNumber;
}
