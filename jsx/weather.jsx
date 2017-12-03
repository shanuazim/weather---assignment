//Require React modules
const ReactDom = require('react-dom');
const React = require('react');

//Require custom components
const CityDisplay = require('./cityDisplay.jsx');
const WeatherDisplay = require('./weatherDisplay.jsx');


class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherList: [],
            newCity: '',
            currentCity: '',
        };
        this.getWeather = this.getWeather.bind(this);
        this.addCity = this.addCity.bind(this);
    }

    getWeather() {
        let url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.newCity + '&units=imperial&cnt=16&&appid=6ea35fbcd51d5e917b7d8309292bc51c'
      fetch(url)
      .then(response=>response.json())
      .then(weatherJson => {
        this.setState({currentCity: `${weatherJson.city.name}, ${weatherJson.city.country}`})
        this.setState({weatherList: weatherJson.list})
      })
    }

    addCity(event) {
      this.setState({newCity: event.target.value})
     
    }

    getTime(){
        var now = new Date()
        return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
   }
  
    render() {
      return (
        <div>
            <h1>Weather Forecast </h1>  
            <div>Time Now: {this.getTime()}</div><br/>           
            <CityDisplay
              newCity={this.state.newCity}
              addCity={this.addCity}
              getWeather={this.getWeather}
            />
            <br/>
            <WeatherDisplay
              weatherList={this.state.weatherList}
              currentCity={this.state.currentCity}
            />
        </div>
        )
      }
  }

  module.exports = Weather