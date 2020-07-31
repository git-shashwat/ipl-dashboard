import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Card, CardBody, CardTitle, Row, Col,Container, Badge } from 'reactstrap';
import ReactSpeedometer from 'react-d3-speedometer';
import { connect } from 'react-redux';

import { selectSensorsData, selectSensorsError } from '../../redux/sensors/sensors.selectors';
import { selectWeatherData, selectWeatherError } from '../../redux/weather-report/weather.selectors';
import './godown-summary.styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { setSensorAlert } from '../../redux/sensors/sensors.actions';
import Lottie from 'react-lottie';
import errorAnime from '../../lottie/3648-no-internet-connection.json';

const GodownSummary = ({ sensorData, weatherData: { main: { temp = 25 , humidity = 75 } }, setSensorAlert, sensorError }) => {
    const [conditionScore, setConditionScore] = useState(0);
    const [conditionTag, setConditionTag] = useState(null);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: errorAnime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        setSensorAlert(null);
        let val = 0;
        if (sensorData.length !== 0) {
            console.log('fk')
            val = 100-3*Math.abs(temp-sensorData[0].record.temperature.data)-2*Math.abs(humidity-sensorData[0].record.humidity.data)-Math.abs(60-sensorData[0].record.light.data);
            if (val < 0) val = 0;
            if (val >= 80) {
                setConditionTag('Very Good')
            } else if ((val < 80 && val >= 60)) {
                setConditionTag('Good');
            } else if ((val < 60 && val >= 40)) {
                setConditionTag('Moderate');
            } else if ((val < 40 && val >= 20)) {
                setConditionTag('Poor');
            } else {
                setConditionTag('Very Poor');
                setSensorAlert({
                    title: 'atmospheric conditions alert',
                    description: 'Very poor atmospheric conditions have been recorded in Godown 1. Please take necessary actions.'
                });
            }
            if (sensorData[0].record.fire.data) {
                setSensorAlert({
                    title: 'fire alert',
                    description: `Do not panic. Alert notifications have been sent to on ground officials' mobile phones to control the situation. Here's the`,
                    link: 'mitigation stratergy'
                })
            }
        }
        setConditionScore(val);
    }, [sensorData, temp, humidity])

    return (
        <Card className="mb-3 godown-summary-container" style={{ borderRadius: '20px' }}>
            <CardBody>
                {sensorData.length === 0 ? (
                    <div>
                        <Lottie options={defaultOptions} width={300} height={300} />
                    </div>
                ) : (
                    <Row>
                    <Col lg={4} md={12}>
                    <CardTitle tag="h6" className="mb-4">
                    <h1><b>Godown 1</b></h1>
                    <p>Location: 3L-45-2B</p>
                </CardTitle>
                <div className="mt-5">
                        <Container fluid>
                            <p className="mb-1">Condition Score</p>
                            <h3>{conditionTag}</h3>
                            <ReactSpeedometer 
                                minValue={0}
                                maxValue={100}
                                value={conditionScore}
                                needleColor="black"
                                startColor="red"
                                segments={10}
                                endColor="green"
                                paddingHorizontal={4}
                                paddingVertical={3}
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
                )}
            </CardBody>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    sensorData: selectSensorsData,
    sensorError: selectSensorsError,
    weatherData: selectWeatherData,
    weatherError: selectWeatherError
});

const mapDispatchToProps = dispatch => ({
    setSensorAlert: (alert) => dispatch(setSensorAlert(alert))
});

export default connect(mapStateToProps, mapDispatchToProps)(GodownSummary);