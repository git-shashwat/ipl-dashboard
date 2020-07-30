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
    const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        setInterval(() => {
            const d = new Date();
            setDate(`${dayArray[d.getDay()]}, ${d.getDate()} ${monthMap[d.getMonth()]}`);
        }, 1000);
    })

    return (
        <Card>
            {!!errorMessage ? (
                <CardBody>
                    <Alert color="danger">Unable To Fetch Weather</Alert>
                </CardBody>
            ) : (
                <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="d-flex flex-column align-items-center">
                        <h3>Today</h3>
                        <h5>{date}</h5>
                        <LocationBox location={location} />
                    </div>
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