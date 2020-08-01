import React, { useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import _ from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    Row,
    Container,
    Col,
    Card,
    CardBody,
    CardTitle,
    Badge
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';

import "../../../styles/components/status-lights.scss";
import WeatherReportContainer from '../../../components/weather-report/weather-report.container';
import WeatherAlerts from '../../../components/weather-alerts/weather-alerts.component';
import GodownSummaryContainer from '../../../components/godown-summary/godown-summary.container';
import { fetchLocationStart, fetchWeatherStart, fetchAlertsStart } from '../../../redux/weather-report/weather.actions';
import { fetchSensorDataStart, fetchCropScoreStart } from '../../../redux/sensors/sensors.actions';
import { fetchUsersStart } from '../../../redux/users/users.actions';

const HomePage = ({ fetchLocationStart, fetchWeatherStart, fetchAlertsStart, fetchSensorDataStart, fetchUsersStart, fetchCropScoreStart }) => {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position => {
                fetchLocationStart(position.coords),
                fetchWeatherStart(position.coords),
                fetchAlertsStart(position.coords)
            }))
        }
        fetchSensorDataStart();
        fetchUsersStart();
        fetchCropScoreStart();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position => {
                    fetchWeatherStart(position.coords)
                }))
            }    
        }, 10*60*1000)   //FIXME yaha par wapas 3 min kr dena
        return () => clearInterval(intervalId);
    }, [navigator.geolocation]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchSensorDataStart();
        }, 10*60*1000);  //FIXME yaha wapas 15 sec kr dena
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Row className="mb-1">
                <Col lg={ 12 }>
                    <h4 className="text-primary"><b>Dashboard</b></h4>
                </Col>
            </Row>
            <Row>
                <Col lg={ 9 } md={8}>
                    <GodownSummaryContainer />
                    <Card className="mb-3" style={{ borderRadius: '20px' }}>
                        <CardBody>
                        <Row>
                            <Col lg={4} md={12}>
                            <CardTitle tag="h6" className="mb-4">
                            <h1><b>Godown 2</b></h1>
                            <p>Location: 3L-23-2C</p>
                        </CardTitle>
                        <div className="mt-5">
                                <Container fluid>
                                    <p className="mb-1">Condition Score</p>
                                    <h3>Moderate</h3>
                                    <ReactSpeedometer 
                                        minValue={0}
                                        maxValue={100}
                                        value={52}
                                        needleColor="black"
                                        startColor="red"
                                        segments={10}
                                        endColor="green"
                                        paddingHorizontal={4}
                                        paddingVertical={4}
                                        valueTextFontSize={24}
                                    />
                                </Container>
                            </div>
                            </Col>
                            <Col lg={8} md={12} className="mt-lg-5">
                            <div className="d-flex justify-content-between">
                                <h2>Sensor Readings <Badge color="danger" style={{ paddingTop: '0.5em' }}>LIVE</Badge></h2>
                                <h2>Status</h2>
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Temperature Reading</h5>
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
                                            <h5 className="mb-1">Humidity Reading</h5>
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
                                            <h5 className="mb-1">Light Intensity Reading</h5>
                                        </Col>
                                        <Col>
                                            <div class="mr-2 led-green"></div>
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">86 <small>units</small></h2>
                                </CardTitle>                            
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 } md={4}>                
                    <div className="mb-3">
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span className="text-warning"><b>Weather Report</b></span>
                        </div>
                        <WeatherReportContainer />                
                    </div>
                    <div>
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span className="text-danger"><b>Weather Alerts</b></span>
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
    fetchAlertsStart: (coords) => dispatch(fetchAlertsStart(coords)),
    fetchSensorDataStart: () => dispatch(fetchSensorDataStart()),
    fetchUsersStart: () => dispatch(fetchUsersStart()),
    fetchCropScoreStart: () => dispatch(fetchCropScoreStart())
});

export default compose(
    setupPage({
        pageTitle: 'Dashboard'
    }),
    connect(undefined, mapDispatchToProps)
)(HomePage);