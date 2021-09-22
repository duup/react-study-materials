const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/app');

let target = document.querySelector('#app');
ReactDom.render(<App />, target);
