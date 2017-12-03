const React = require('react')
const ReactDOM = require('react-dom')
//Require custom component
const Weather = require('./weather.jsx')

ReactDOM.render(
  <div id="content">
    <Weather />
  </div>,
    document.getElementById('content')
)