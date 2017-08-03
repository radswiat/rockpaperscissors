// extra polyfill for iterating HTMLCollection and NodeList
// this is not part of babel-polyfill
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
