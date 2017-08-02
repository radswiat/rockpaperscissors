export function bindOnce(element, event, cb) {
	let calleeFunction = (event) => {
		event.target.removeEventListener(event.type, calleeFunction);
		cb(event);
	};
	element.addEventListener(event, calleeFunction);
}

export function clearAllNodes(node) {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
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
