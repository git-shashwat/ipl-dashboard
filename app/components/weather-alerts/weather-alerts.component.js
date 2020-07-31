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
            <Card className="mt-2" outline color="primary" style={{ borderRadius: '20px' }}>
                <CardBody>
                    <h6><b>Heave Rain Advisory issued Aug 1 at 3:17 AM IST expiring August 3 at 12:00PM IST by IMD</b></h6>
                    <h6>Severity: <span className="text-warning">Advisory</span></h6>
                    <p><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></p>
                    </CardBody>
            </Card>
            <Card className="mt-2" outline color="danger" style={{ borderRadius: '20px' }}>
                <CardBody>
                    <h6><b>Flood Advisory issued Aug 2 at 8:00 AM IST expiring August 3 at 12:00PM IST by IMD</b></h6>
                    <h6>Severity: <span className="text-danger">Severe</span></h6>
                    <p><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></p>
                    </CardBody>
            </Card> 
            <Card className="mt-2" outline color="danger" style={{ borderRadius: '20px' }}>
                <CardBody>
                    <h6><b>Cyclone Alert issued Aug 2 at 8:00 AM IST by IMD</b></h6>
                    <h6>Severity: <span className="text-danger">Alert</span></h6>
                    <p><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></p>
                </CardBody>
            </Card> 
            <Card className="mt-2" outline color="warning" style={{ borderRadius: '20px' }}>
                <CardBody>
                    <h6><b>Extremely High Temperatures Advisory issued Aug 2 at 8:00 AM IST expiring August 3 at 12:00PM IST by IMD</b></h6>
                    <h6>Severity: <span className="text-primary">Advisory</span></h6>
                    <p><a target="_blank" href="https://mausam.imd.gov.in/imd_latest/contents/all_india_forcast_bulletin.php">Read More</a></p>
                </CardBody>
            </Card>                        
        </Slider>
      </Card>
    );
};

export default WeatherAlerts;