import React from 'react';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Progress,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";
import "../../../styles/components/status-lights.scss";

import {
    TrTableMonitor
} from "../../components/Monitor/TrTableMonitor";

const Monitor = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Dashboard"
                    className="mb-4 mb-lg-5"
                />

            </Col>
        </Row>
        <Row>
            <Col lg={ 8 }>
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
            </Col>
            <Col lg={ 4 }>                
                <div className="hr-text hr-text-left mt-2 mb-4">
                    <span>Weather Report</span>
                </div>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Dashboard'
})(Monitor);