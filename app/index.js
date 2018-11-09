//npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!!!
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)