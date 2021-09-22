const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/app');
const Greetings = require('./components/greetings');
const Add = require('./components/add');

let appDiv = document.querySelector('#app');
let appDiv2 = document.querySelector('#app2');
let appDiv3 = document.querySelector('#app3');

ReactDom.render(<Greetings name={'Jack'} favNumber={42} />, appDiv);
ReactDom.render(<Add a={1} b={2} />, appDiv2);
ReactDom.render(<App />, appDiv3);
