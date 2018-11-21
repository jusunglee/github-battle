//npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

var App = require('./components/App')

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)