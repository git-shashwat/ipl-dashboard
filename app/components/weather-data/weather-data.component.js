import React from 'react';
import Lottie from 'react-lottie';

import clearWeatherAnime from '../../lottie/2477-sun-in-a-cloud.json';
import rainyWeatherAnime from '../../lottie/2074-rain.json';
import sunnyWeatherAnime from '../../lottie/22190-sunny-day.json';

import { Row, Col } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const WeatherData = ({ weather: { weather, main: { temp, pressure, humidity }, wind: { speed }, clouds: { all } } }) => {
    const [weatherAnime, setWeatherAnime] = useState(clearWeatherAnime)
    
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: weatherAnime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        const weatherType = weather[0].main;
        if (weatherType === 'Haze') {
            setWeatherAnime(clearWeatherAnime);
        } else if (weatherType === 'Clouds' || weatherType === 'Rain') {
            setWeatherAnime(rainyWeatherAnime);
        } else {
            setWeatherAnime(sunnyWeatherAnime);
        }
    }, [weather]);
    
    return (
        <div>
            <h5>{weather[0].main}</h5>
            <Row>
                <Col xl={6} lg={6}>
                    <h1>{temp} <sup><small>o</small></sup>C</h1>
                    <div>
                        <Lottie options={defaultOptions} />
                    </div>
                </Col>
                <Col xl={6} lg={6}>
                    <div>
                        <h5 className="text-secondary">Precipitation: {all}%</h5>
                        <h5 className="text-secondary">Humidity: {humidity}%</h5>
                        <h5 className="text-secondary">Pressure: {pressure} hPa</h5>
                        <h5 className="text-secondary">Wind: {Number(speed)*3.6}km/h</h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WeatherData;