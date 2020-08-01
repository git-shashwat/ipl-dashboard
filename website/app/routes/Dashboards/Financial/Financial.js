import React from 'react';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Button,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import {
    StackedAreaChart
} from "../../components/Financial/StackedAreaChart"

const Financial = () => (
    <div>
        <Row className="mb-3">
            <Col lg={ 12 }>
                <h4 className="text-secondary">Crop Health Dashboard</h4>
            </Col>
        </Row>
        <Row>
            <Col xl={3} lg={9}>
                <div className="mb-2">
                    <h3>Comodities Stored</h3>
                    <h6 className="text-secondary">Select a commodity to get it's price analysis</h6>
                        <ListGroup>
                            <ListGroupItem color="primary" active action>Corn</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Wheat</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Rice</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Bajra</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Moong</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Chana</ListGroupItem>
                        </ListGroup>                        
                </div>            
            </Col>
            <Col xl={9} lg={9}>
                <Col lg={ 12 }>
                    <div className="hr-text hr-text-center mt-4 mb-4">
                        <span>Crop Price Analysis</span>
                    </div>
                </Col>
                <Row>
                    <Col lg={ 3 }>
                        <Card className="mb-3">
                            <CardBody>
                                <CardTitle tag="h6" className="mb-4">
                                    Price 1
                                </CardTitle>
                                <div>
                                    <div className="mb-3">
                                        <h2> ₹ 188.00</h2>
                                    </div>
                                    <div>
                                        <i className="fa fa-caret-down fa-fw text-danger"></i>  ₹464.00
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={ 3 }>
                        <Card className="mb-3">
                            <CardBody>
                                <CardTitle tag="h6" className="mb-4">
                                    Price 2
                                </CardTitle>
                                <div>
                                    <div className="mb-3">
                                        <h2> ₹ 553.00</h2>
                                    </div>
                                    <div>
                                        <i className="fa fa-caret-down fa-fw text-danger"></i>  ₹994.00
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={ 3 }>
                        <Card className="mb-3">
                            <CardBody>
                                <CardTitle tag="h6" className="mb-4">
                                    Price 3
                                </CardTitle>
                                <div>
                                    <div className="mb-3">
                                        <h2> ₹ 451.00</h2>
                                    </div>
                                    <div>
                                        <i className="fa fa-caret-up fa-fw text-success"></i>  ₹938.00
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={ 3 }>
                        <Card className="mb-3">
                            <CardBody>
                                <CardTitle tag="h6" className="mb-4">
                                    Price 4
                                </CardTitle>
                                <div>
                                    <div className="mb-3">
                                        <h2> ₹ 194.00</h2>
                                    </div>
                                    <div>
                                        <i className="fa fa-caret-up fa-fw text-success"></i>  ₹519.00
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>                
                </Row>
                <Col>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle className="mb-4 d-flex">
                                <h6>Price Performance</h6>
                            </CardTitle>
                            <div className="d-flex justify-content-center">
                                <StackedAreaChart />
                            </div>
                        </CardBody>
                    </Card>
                </Col>          
            </Col>
        </Row>
    </div>
);

export default setupPage({
    pageTitle: 'Financial'
})(Financial);