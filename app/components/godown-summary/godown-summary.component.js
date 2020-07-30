import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Card, CardBody, CardTitle, Row, Col,Container } from 'reactstrap';
import ReactSpeedometer from 'react-d3-speedometer';
import { connect } from 'react-redux';

import { selectSensorsData } from '../../redux/sensors/sensors.selectors';
import { selectWeatherData } from '../../redux/weather-report/weather.selectors';
import './godown-summary.styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const GodownSummary = ({ sensorData, weatherData: { main: { temp, humidity } } }) => {
    const [conditionScore, setConditionScore] = useState(NaN);

    useEffect(() => {
        let val = 100-5*Math.abs(temp-sensorData[0].record.temperature.data)-3*Math.abs(humidity-sensorData[0].record.humidity.data)-Math.abs(60-sensorData[0].record.light.data);
        if (val < 0) val = 0
        setConditionScore(val);
    }, [sensorData])

    return (
        <Card className="mb-3">
                        <CardBody>
                        <Row>
                            <Col lg={4} md={12}>
                            <CardTitle tag="h6" className="mb-4">
                            <h1>Godown 1</h1>
                            <p>Location: 3L-45-2B</p>
                        </CardTitle>
                        <div className="mt-5">
                                <Container fluid>
                                    <p className="mb-1">Condition Score</p>
                                    <ReactSpeedometer 
                                        minValue={0}
                                        maxValue={100}
                                        value={conditionScore}
                                        needleColor="yellow"
                                        startColor="red"
                                        segments={10}
                                        endColor="green"
                                        paddingHorizontal={4}
                                        paddingVertical={4}
                                    />
                                </Container>
                            </div>
                            </Col>
                            <Col lg={8} md={12} className="mt-lg-5">
                            <div className="d-flex justify-content-between">
                                <h2><span className="text-danger">Live</span> Sensor Readings</h2>
                                <h2>Status</h2>
                            </div>
                            <div className="mt-3">
                                <CardTitle tag="h5" className="mb-4">
                                    <Row>
                                        <Col>
                                            <h5 className="mb-1">Temperature Reading</h5>
                                        </Col>
                                        <Col>
                                            {sensorData[0].record.temperature.status ? (
                                                <div class="mr-2 led-green"></div>
                                            ) : (
                                                <div class="mr-2 led-red"></div>
                                            )}
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">{sensorData[0].record.temperature.data} <small><sup>o</sup>C</small></h2>
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
                                            {sensorData[0].record.humidity.status ? (
                                                <div class="mr-2 led-green"></div>
                                            ) : (
                                                <div class="mr-2 led-red"></div>
                                            )}
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">{sensorData[0].record.humidity.data} <small>air g.kg<sup>-1</sup></small></h2>
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
                                            {sensorData[0].record.light.status ? (
                                                <div class="mr-2 led-green"></div>
                                            ) : (
                                                <div class="mr-2 led-red"></div>
                                            )}
                                        </Col>
                                    </Row>
                                    <h2 className="mb-0">{sensorData[0].record.light.data} <small>units</small></h2>
                                </CardTitle>                            
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                    </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    sensorData: selectSensorsData,
    weatherData: selectWeatherData 
})

export default connect(mapStateToProps)(GodownSummary);