import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody, Alert } from 'reactstrap';
import { createStructuredSelector } from 'reselect';

import './weather-report.styles.scss';
import { selectWeatherData, selectWeatherLocation, selectWeatherError } from '../../redux/weather-report/weather.selectors';
import LocationBox from '../location-box/location-box.component';
import WeatherData from '../weather-data/weather-data.component';
import { connect } from 'react-redux';

const WeatherReport = ({ location, weather, errorMessage }) => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setInterval(() => {
            const d = new Date();
            setDate(d.toLocaleString());
        }, 1000);
    })

    return (
        <Card>
            {!!errorMessage ? (
                <CardBody>
                    <Alert color="danger">Unable To Fetch Weather</Alert>
                </CardBody>
            ) : (
                <CardBody>
                    <CardTitle>
                        <LocationBox location={location} />
                    </CardTitle>
                    <h5>{date}</h5>
                    <WeatherData weather={weather} />
                </CardBody>
            )}
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    location: selectWeatherLocation,
    weather: selectWeatherData,
    errorMessage: selectWeatherError
});

export default connect(mapStateToProps)(WeatherReport);