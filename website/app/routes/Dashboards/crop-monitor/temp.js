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