import React, {Component} from 'react';
import {GetLocationByIp} from '../Actions/index'
import {GetWeatherByLoc} from '../Actions/index'
import {connect} from 'react-redux';
import _ from 'lodash';

class Weather extends Component
{

    componentDidMount()
    {
        const loc = this
            .props
            .GetLocationByIp();
    };

    getweather()
    {
        this
            .props
            .GetWeatherByLoc(this.props.location.location.latitude, this.props.location.location.longitude);
    }

    render()
    {
        if (!this.props.weather.main) {
            return (
                <div>

                    <button onClick={() => this.getweather()}>Get Weather Information</button>
                </div>
            )
        }

        const imgUrl = `http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`;

        return (
            <div>

                <span>Current condition for
                    <br/>
                </span>
                <span>
                    {this.props.location.city}
                    <br/>
                </span>
                <span>
                    {this.props.weather.main.temp}
                    K
                    <br/></span>
                <img src={imgUrl}/>
                <br/>

                <span>
                    {this.props.weather.weather[0].description}
                    <br/></span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather, location: state.location};
}

export default connect(mapStateToProps, {GetLocationByIp, GetWeatherByLoc})(Weather)