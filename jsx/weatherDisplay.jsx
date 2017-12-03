const React = require('react')

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
              <table>
                <thead>{this.props.currentCity}
                    <tr>
                        <th>Time</th>
                        <th>DayTime</th>
                        <th>Morning</th>
                        <th>Evening</th>
                        <th>Night</th>
                        <th>Description</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.props.weatherList.map((row, index) => {
                            return ( 
                                <tr key={index}>
                                    <td>
                                        {row.dt}
                                    </td>
                                    <td>
                                        {row.temp.day}
                                    </td>
                                    <td>
                                        {row.temp.morn}
                                    </td>
                                    <td>
                                        {row.temp.eve}
                                    </td>
                                    <td>
                                        {row.temp.night}
                                    </td>
                                    <td>
                                        {row.weather[0].description}
                                    </td>
                                   
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


module.exports = WeatherDisplay