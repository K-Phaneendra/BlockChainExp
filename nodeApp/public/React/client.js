// this file will be loaded on client side
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.jsx');

ReactDOM.hydrate(React.createElement(App));
