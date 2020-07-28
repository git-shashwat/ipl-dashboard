import React from 'react';
import faker from 'faker/locale/en';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
    Jumbotron
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

const data = [
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 32, projected: 35, amt: 35},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 43, projected: 84, amt: 84},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 52, projected: 42, amt: 42},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 82, projected: 87, amt: 87},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 70, projected: 72, amt: 72},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 93, projected: 69, amt: 69},
    {name: faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(), live: 84, projected: 88, amt: 88},
];

const Reports = () => (
    <div>
        <Row className="mb-1">
            <Col lg={ 12 }>
                <h4 className="text-secondary">Sensors Monitoring</h4>
                <Form className="mb-2" inline>
                    <FormGroup className="mr-2">
                        <Input name="godown" type="select">
                            <option value="godown-1">Godown 1</option>
                            <option value="godown-2">Godown 2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="mr-2">
                        <Input name="compartment" type="select">
                            <option value="compartment-1">Compartment 1</option>
                            <option value="compartment-2">Compartment 2</option>
                        </Input>
                    </FormGroup>  
                    <Button type="button" color="primary">Examine</Button>                  
                </Form>
            </Col>
        </Row>
        <Jumbotron>
            <h3>CORN</h3>   {/* //TODO Dynamically update this value based on the crop stored in that compartment */}
        </Jumbotron>
        <Row className="mb-1">
            <Col xl={ 3 } lg={ 3 } className="mb-4 mb-lg-0">
                <Row>
                    <Col xl={12} lg={12} md={6}>
                        <Card className="mb-2">
                            <CardBody className="bb-0">
                                <span className="d-flex justify-content-center">
                                    <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                        Live Temperature
                                        <br></br>
                                        (SensorID: <span className="text-primary">43t2</span>)
                                    </CardTitle>
                                </span>
                                <span className="d-flex justify-content-center">
                                    <div className="mb-0 bb-0">
                                        <h1>39<sup>o</sup>C</h1>
                                    </div>
                                </span>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12} lg={12} md={6}>
                        <Card className="mb-1">
                            <CardBody className="bb-0">
                                <span className="d-flex justify-content-center">
                                    <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                        Projected Temperature
                                    </CardTitle>
                                </span>
                                <span className="d-flex justify-content-center">
                                    <div className="mb-0 bb-0">
                                        <h1>40<sup>o</sup>C</h1>
                                    </div>
                                </span>
                            </CardBody>
                        </Card>                                    
                    </Col>
                </Row>
            </Col>
            <Col xl={ 9 } lg={ 9 } className="mb-4 mb-lg-0">
                <Card>
                    <CardBody className="bb-0 d-flex justify-content-center">
                        <LineChart width={900} height={500} data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="projected" stroke="#2E3F42" activeDot={{r: 8}} fill="#2E3F42"/>
                            <Line type="monotone" dataKey="live" stroke="#F85C70" fill="#F85C70" />
                        </LineChart>                        
                    </CardBody>
                </Card>
            </Col>        
        </Row>
        <Row className="mb-1">
            <Col xl={ 3 } lg={ 3 } className="mb-4 mb-lg-0">
                <Card className="mb-2">
                    <CardBody className="bb-0">
                        <span className="d-flex justify-content-center">
                            <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                Live Humidity
                                <br></br>
                                (SensorID: <span className="text-primary">47h8</span>)
                            </CardTitle>
                        </span>
                        <span className="d-flex justify-content-center">
                            <div className="mb-0 bb-0">
                                <h1>84 air g.kg<sup>-1</sup></h1>
                            </div>
                        </span>
                    </CardBody>
                </Card>
                <Card className="mb-1">
                    <CardBody className="bb-0">
                        <span className="d-flex justify-content-center">
                            <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                Projected Humidity
                            </CardTitle>
                        </span>
                        <span className="d-flex justify-content-center">
                            <div className="mb-0 bb-0">
                                <h1>87 air g.kg<sup>-1</sup></h1>
                            </div>
                        </span>
                    </CardBody>
                </Card>                
            </Col>
            <Col xl={ 9 } lg={ 9 } className="mb-4 mb-lg-0">
                <Card>
                    <CardBody className="bb-0 d-flex justify-content-center">
                        <LineChart width={900} height={500} data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="projected" stroke="#2E3F42" activeDot={{r: 8}} fill="#2E3F42"/>
                            <Line type="monotone" dataKey="live" stroke="#F85C70" fill="#F85C70" />
                        </LineChart>                        
                    </CardBody>
                </Card>
            </Col>        
        </Row>
        <Row className="mb-1">
            <Col xl={ 3 } lg={ 3 } className="mb-4 mb-lg-0">
                <Card className="mb-2">
                    <CardBody className="bb-0">
                        <span className="d-flex justify-content-center">
                            <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                Live Light Intensity
                                <br></br>
                                (SensorID: <span className="text-primary">45l2</span>)
                            </CardTitle>
                        </span>
                        <span className="d-flex justify-content-center">
                            <div className="mb-0 bb-0">
                                <h1>86 units</h1>
                            </div>
                        </span>
                    </CardBody>
                </Card>
                <Card className="mb-1">
                    <CardBody className="bb-0">
                        <span className="d-flex justify-content-center">
                            <CardTitle tag="h6" className="mb-0 bb-0 text-secondary">
                                Projected Light Intensity
                            </CardTitle>
                        </span>
                        <span className="d-flex justify-content-center">
                            <div className="mb-0 bb-0">
                                <h1>77 units</h1>
                            </div>
                        </span>
                    </CardBody>
                </Card>                
            </Col>
            <Col xl={ 9 } lg={ 9 } className="mb-4 mb-lg-0">
                <Card>
                    <CardBody className="bb-0 d-flex justify-content-center">
                        <LineChart width={900} height={500} data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="live" stroke="#2E3F42" activeDot={{r: 8}} fill="#2E3F42"/>
                            <Line type="monotone" dataKey="projected" stroke="#F85C70" fill="#F85C70" />
                        </LineChart>                        
                    </CardBody>
                </Card>
            </Col>        
        </Row>                
    </div>
);

export default setupPage({
    pageTitle: 'Reports'
})(Reports);