import React from 'react';
import Slider from 'react-slick';

import './weather-alerts.styles.scss';
import { Card, CardBody, CardTitle } from 'reactstrap';

const WeatherAlerts = () => {
    const settings = {
        dots: true,
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <Card>
        <Slider {...settings}>
            <Card outline color="danger">
                <CardBody>
                    <h4><b>Earthquake Alert</b></h4>
                    <h5>Severity: <span className="text-warning">Low</span></h5>
                </CardBody>
            </Card>
            <Card outline color="danger">
                <CardBody>
                    <h4><b>Cyclone Alert</b></h4>
                    <h5>Severity: <span className="text-danger">High</span></h5>
                </CardBody>
            </Card>
            <Card outline color="danger">
                <CardBody>
                    <h4><b>Tornado Alert</b></h4>
                    <h5>Severity: <span className="text-danger">High</span></h5>
                </CardBody>
            </Card>
            <Card outline color="danger">
                <CardBody>
                    <h4><b>Volcanic Eruption Alert</b></h4>
                    <h5>Severity: <span className="text-warning">Moderate</span></h5>
                </CardBody>
            </Card>
            <Card outline color="danger">
                <CardBody>
                    <h4><b>Flood Alert</b></h4>
                    <h5>Severity: <span className="text-success">Low</span></h5>
                </CardBody>
            </Card>                        
        </Slider>
      </Card>
    );
};

export default WeatherAlerts;