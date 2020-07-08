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
                        <h2><span className="text-danger">Live</span> Sensor Readings</h2>
                        <div className="mt-3">
                            <CardTitle tag="h5" className="mb-4">
                                <h5 className="mb-1">Temperature Reading <span><Badge color="primary" pill>Sensor 43t2</Badge></span></h5>
                                <h2 className="mb-0">27 <small><sup>o</sup>C</small></h2>
                            </CardTitle>     
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-success"></i> Previous Reading
                                    </div>
                                    <h6 className="mb-0">26 <sup>o</sup>C</h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-danger"></i> Projected Reading
                                    </div>
                                    <h6 className="mb-0">28<sup>o</sup>C</h6>                                    </div>
                            </div> 
                        </div>
                        <hr></hr>
                        <div className="mt-3">
                            <CardTitle tag="h5" className="mb-4">
                                <h5 className="mb-1">Humidity Reading <span><Badge color="primary" pill>Sensor 47h8</Badge></span></h5>
                                <h2 className="mb-0">84 <small>air g.kg<sup>-1</sup></small></h2>
                            </CardTitle>     
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-success"></i> Previous Reading
                                    </div>
                                    <h6 className="mb-0">83 air g.kg<sup>-1</sup></h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-danger"></i> Projected Reading
                                    </div>
                                <h6 className="mb-0">84 air g.kg<sup>-1</sup></h6>                                    </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="mt-3">
                            <CardTitle tag="h5" className="mb-4">
                                <h5 className="mb-1">Light Sensor Reading <span><Badge color="primary" pill>Sensor 45l2</Badge></span></h5>
                                <h2 className="mb-0">86 <small>units</small></h2>
                            </CardTitle>     
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-success"></i> Previous Reading
                                    </div>
                                    <h6 className="mb-0">87 units</h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-danger"></i> Projected Reading
                                    </div>
                                <h6 className="mb-0">87 units</h6>                                    </div>
                            </div>                        
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 4 }>                
                <div className="hr-text hr-text-left mt-2 mb-4">
                    <span>Mounted Sensors</span>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="bt-0">Sensor ID</th>
                            <th className="bt-0 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableMonitor />
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Dashboard'
})(Monitor);