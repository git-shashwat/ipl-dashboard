import React from 'react';
import { Card, Row, Col, CardTitle, CardBody } from 'reactstrap';
import { IoIosFlash } from 'react-icons/io';
import { AiFillPushpin } from 'react-icons/ai';
import Trend from 'react-trend';
import CountUp from 'react-countup';
import './gendash.styles.scss';
import DashCard from '../dash-card/dash-card.component.jsx';

const GenDash = () => {
    return (
        <div id="general" className="mt-5">
            <Row>
                <Col md={6} className="trends-chart order-md-2">
                    <Card className="neumorphic-card trends-card">
                        <CardTitle className="pt-4 pl-4">
                            <h5 className="chart-title">Number of Punjabi Players over the seasons</h5>
                        </CardTitle>
                        <CardBody>
                            <Trend 
                                data={[0, 10, 5, 22, 3.6, 11]}
                                autoDraw={true}
                                gradient={['#0FF', '#F0F', '#FF0']}
                                smooth={true}
                            />                        
                        </CardBody>
                    </Card>
                </Col>            
                <Col className="mb-5 order-md-1" md={6}>                
                    <Row>
                        <Col lg={6} md={12}>
                            <DashCard Icon={IoIosFlash}>
                                <h2 className="stat-text" style={{ color: '#F62AA0' }}>
                                    <CountUp 
                                        end={100}
                                        separator=" "
                                        decimals={2}
                                        decimal="."
                                        suffix="% "
                                    />
                                </h2>
                                <h2 className="stat-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>
                            </DashCard>
                        </Col>               
                    </Row>
                    <Row className="mt-5">
                        <Col lg={6} md={12}></Col>
                        <Col lg={6} md={12}>
                            <Card className="neumorphic-card">
                                <DashCard Icon={AiFillPushpin}>
                                    <h2 className="stat-text">
                                        Lorem ipsum dolor sit amet <a href="#general" className="middle">consectetur</a> adipisicing elit.
                                    </h2>                                    
                                </DashCard>
                            </Card>
                        </Col>                    
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default GenDash;