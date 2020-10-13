import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';

import './weather-report.styles.scss';
import LocationBox from '../location-box/location-box.component';
import WeatherData from '../weather-data/weather-data.component';

const WeatherReport = () => {
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
        <Card style={{ borderRadius: '20px' }}>
            <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="d-flex flex-column align-items-center">
                    <h3>Today</h3>
                    <h5>{date}</h5>
                    <LocationBox />
                </div>
                <WeatherData />
            </CardBody>
        </Card>
    );
};

export default WeatherReport;