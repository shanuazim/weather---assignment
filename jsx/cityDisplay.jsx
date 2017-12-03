const React = require('react')

class CityDisplay extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
    return (
          <div>
            <div className = "header">
              <input id='city' placeholder="Enter City Name:" type="text"
              onChange={this.props.addCity}
              value={this.props.cityAdded}
            />
          <button
             onClick={this.props.getWeather}>
             Let's get the forecast!
          </button>
        </div>
      </div>
     
    )
  }
}

module.exports = CityDisplay