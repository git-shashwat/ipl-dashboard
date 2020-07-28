import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    Row,
    Card,
    CardBody,
    Badge,
    CardTitle,
    Progress,
    Col
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';

import "../../../styles/components/status-lights.scss";
import WeatherReportContainer from '../../../components/weather-report/weather-report.container';
import WeatherAlerts from '../../../components/weather-alerts/weather-alerts.component';
import { fetchLocationStart, fetchWeatherStart, fetchAlertsStart } from '../../../redux/weather-report/weather.actions';

const HomePage = ({ fetchLocationStart, fetchWeatherStart, fetchAlertsStart }) => {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position => {
                fetchLocationStart(position.coords),
                fetchWeatherStart(position.coords),
                fetchAlertsStart(position.coords)
            }))
        }
    }, [navigator.geolocation]);

    useEffect(() => {
        setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position => {
                    fetchWeatherStart(position.coords)
                }))
            }    
        }, 5*60*1000)   //FIXME yaha par wapas 1 min kr dena
    }, [navigator.geolocation])

    return (
        <div>
            <Row className="mb-1">
                <Col lg={ 12 }>
                    <h4 className="text-secondary">Dashboard</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={ 9 } md={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                <h1>Godown 1</h1>
                            </CardTitle>
                            <div className="mb-4">
                                <div>
                                    <p>Location: 3L-45-2B</p>
                                    <h2 className="mb-1">Storage Capacity</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center">% Volume Occupied</span>
                                    <Progress value="86" className="mt-2 w-50" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">86%</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center mr-2">% Units Placed</span>
                                    <Progress value="60" className="mt-2 w-50" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">60%</span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="d-flex justify-content-between">
                                <h2><span className="text-danger">Live</span> Sensor Readings</h2>
                                <h2>Status</h2>
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Temperature Reading <span><Badge color="primary" pill>Sensor 43t2</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-green"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">27 <small><sup>o</sup>C</small></h2>
                                </CardTitle>     
                            </div>
                            <hr></hr>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Humidity Reading <span><Badge color="primary" pill>Sensor 47h8</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-red"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">84 <small>air g.kg<sup>-1</sup></small></h2>
                                </CardTitle>     
                            </div>
                            <hr></hr>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Light Sensor Reading <span><Badge color="primary" pill>Sensor 45l2</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-yellow"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">86 <small>units</small></h2>
                                </CardTitle>                            
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">
                                <h1>Godown 2</h1>
                            </CardTitle>
                            <div className="mb-4">
                                <div>
                                    <p>Location: 3L-45-2C</p>
                                    <h2 className="mb-1">Storage Capacity</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center">% Volume Occupied</span>
                                    <Progress value="70" className="mt-2 w-50" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">70%</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="d-flex align-items-center mr-2">% Units Placed</span>
                                    <Progress value="57" className="mt-2 w-50" style={{height: "5px"}} />
                                    <span className="ml-2 text-inverse">57%</span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="d-flex justify-content-between">
                                <h2><span className="text-danger">Live</span> Sensor Readings</h2>
                                <h2>Status</h2>
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Temperature Reading <span><Badge color="primary" pill>Sensor 43t7</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-green"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">29 <small><sup>o</sup>C</small></h2>
                                </CardTitle>     
                            </div>
                            <hr></hr>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Humidity Reading <span><Badge color="primary" pill>Sensor 47h2</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-red"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">82 <small>air g.kg<sup>-1</sup></small></h2>
                                </CardTitle>     
                            </div>
                            <hr></hr>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Light Sensor Reading <span><Badge color="primary" pill>Sensor 45l5</Badge></span></h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-green"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">85 <small>units</small></h2>
                                </CardTitle>                            
                            </div>
                        </CardBody>
                    </Card>                
                </Col>
                <Col lg={ 3 } md={4}>                
                    <div className="mb-3">
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span>Weather Report</span>
                        </div>
                        <WeatherReportContainer />                
                    </div>
                    <div>
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span>Weather Alerts</span>
                        </div>
                        <WeatherAlerts />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchLocationStart: (coords) => dispatch(fetchLocationStart(coords)),
    fetchWeatherStart: (coords) => dispatch(fetchWeatherStart(coords)),
    fetchAlertsStart: (coords) => dispatch(fetchAlertsStart(coords))
});

export default compose(
    setupPage({
        pageTitle: 'Dashboard'
    }),
    connect(undefined, mapDispatchToProps)
)(HomePage);