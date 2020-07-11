import React from 'react';
import Lottie from 'react-lottie';
import { Card, CardTitle, CardBody } from 'reactstrap';

import animationData from '../../lottie/2477-sun-in-a-cloud.json';
import './weather-report.styles.scss';

const WeatherReport = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Card>
            <CardBody>
                <CardTitle style={{ width: '150px' }}>
                    <Lottie options={defaultOptions} />
                </CardTitle>
                <div>
                    <h4 className="text-secondary">Block E, Sadh Nagar II, Palam, New Delhi, Delhi</h4>
                    <h5>Saturday, 8:00 pm</h5>
                    <h5>Haze</h5>
                    <div className="d-flex justify-content-between">
                        <h1>34 <sup><small>o</small></sup>C</h1>
                        <div>
                            <h5 className="text-secondary">Precipitation: 14%</h5>
                            <h5 className="text-secondary">Humidity: 63%</h5>
                            <h5 className="text-secondary">Wind: 3km/h</h5>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default WeatherReport;