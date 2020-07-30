import React from 'react';
import Lottie from 'react-lottie';

import clearWeatherAnime from '../../lottie/18348-weather-cloudy.json';
import rainyWeatherAnime from '../../lottie/2074-rain.json';
import sunnyWeatherAnime from '../../lottie/22190-sunny-day.json';
import nightWeatherAnime from '../../lottie/12572-moon-stars.json';

import { Row, Col } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const WeatherData = ({ weather: { weather, main: { temp, pressure, humidity }, wind: { speed }, clouds: { all } } }) => {
    const [weatherAnime, setWeatherAnime] = useState(clearWeatherAnime)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: weatherAnime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        const weatherID = String(weather[0].id), icon = weather[0].icon;
        if (weatherID.startsWith('7')) {
            if (icon.endsWith('d')) {
                setWeatherAnime(sunnyWeatherAnime);
            } else {
                setWeatherAnime(nightWeatherAnime);
            }
        } else {
            setWeatherAnime(rainyWeatherAnime);
        }
    }, [weather]);
    
    return (
        <div>
            <h6>{weather[0].main}</h6>
            <Row>
                <Col xl={6} lg={6}>
                    <h1>{temp} <sup><small>o</small>C</sup></h1>
                    <div>
                        <Lottie options={defaultOptions} />
                    </div>
                </Col>
                <Col xl={6} lg={6}>
                    <div>
                        <h6 className="text-secondary">Precipitation: {all}%</h6>
                        <h6 className="text-secondary">Humidity: {humidity}%</h6>
                        <h6 className="text-secondary">Pressure: {(pressure/1000).toFixed(2)} atm</h6>
                        <h6 className="text-secondary">Wind: {(Number(speed)*3.6).toFixed(2)} km/h</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WeatherData;