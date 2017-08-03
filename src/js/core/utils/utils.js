/**
 * Is defined
 * makes code looks better without typeof everywhere
 * @param val
 * @return {boolean}
 */
export function isDefined(val) {
  return typeof val !== 'undefined';
}

/**
 * Clear all html child nodes
 * @param node
 * @return {boolean}
 */
export function clearAllNodes(node) {
  if (!node) {
    return false;
  }
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  return true;
}

/**
 * Convert string into html node
 * @param string
 * @return {Node}
 */
export function stringToHtmlNode(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstChild.cloneNode(true);
}

/**
 * Custom defer,
 * return promise and resolver/reject
 * @return {deferred promise}
 */
export function Defer() {
  this.promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
  this.promise.then = this.promise.then.bind(this.promise);
  this.promise.catch = this.promise.catch.bind(this.promise);
}

/**
 * Get uniform random number
 * @param max
 * @param min
 * @return {int}
 */
export function getUniformRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get falling random number
 * - beginning will be prioritized
 * @param max
 * @param mod - priority modified
 * @return {int}
 */
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
