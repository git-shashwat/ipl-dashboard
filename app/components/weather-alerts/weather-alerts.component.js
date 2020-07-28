import React from 'react';
import Slider from 'react-slick';

import './weather-alerts.styles.scss';
import { Card, CardBody } from 'reactstrap';

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
                    <h5><b>Heave Rain Advisory issued Aug 1 at 3:17 AM IST expiring August 3 at 12:00PM IST by IMD</b></h5>
                    <h5>Severity: <span className="text-warning">Advisory</span></h5>
                    <h6><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></h6>
                    </CardBody>
            </Card>
            <Card outline color="danger">
                <CardBody>
                    <h5><b>Flood Advisory issued Aug 2 at 8:00 AM IST expiring August 3 at 12:00PM IST by IMD</b></h5>
                    <h5>Severity: <span className="text-danger">Severe</span></h5>
                    <h6><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></h6>
                    </CardBody>
            </Card> 
            <Card outline color="danger">
                <CardBody>
                    <h5><b>Cyclone Alert issued Aug 2 at 8:00 AM IST by IMD</b></h5>
                    <h5>Severity: <span className="text-danger">Alert</span></h5>
                    <h6><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></h6>
                </CardBody>
            </Card> 
            <Card outline color="danger">
                <CardBody>
                    <h5><b>Extremely High Temperatures Advisory issued Aug 2 at 8:00 AM IST expiring August 3 at 12:00PM IST by IMD</b></h5>
                    <h5>Severity: <span className="text-primary">Advisory</span></h5>
                    <h6><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></h6>
                </CardBody>
            </Card>                        
        </Slider>
      </Card>
    );
};

export default WeatherAlerts;