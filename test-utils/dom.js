const JSDOM = require('jsdom').JSDOM;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
document = dom.window.document;
