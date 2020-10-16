import React from 'react';
import { Card, Row, Col, CardTitle, CardBody } from 'reactstrap';
import { AiFillPushpin, AiTwotoneFire } from 'react-icons/ai';
import Trend from 'react-trend';
import './gendash.styles.scss';
import DashCard from '../dash-card/dash-card.component.jsx';
import DashBar from '../dash-bar/dash-bar.component.jsx';

const GenDash = () => {
    return (
        <div id="general" className="mt-5">
            <Row>
                <Col lg={6} md={12} className="trends-chart order-md-2">
                    <DashBar />
                </Col>            
                <Col className="mb-5 order-md-1" lg={6} md={12}>                
                    <Row>
                        <Col lg={6} md={12} className="d-flex align-items-end">
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
                        <Col lg={6} md={12}>
                            <Card className="neumorphic-card">
                                <DashCard Icon={AiTwotoneFire}>
                                    <h2 className="stat-text">
                                        Lorem ipsum dolor sit amet <a href="#general" className="middle">consectetur</a> adipisicing elit.
                                    </h2>                                    
                                </DashCard>
                            </Card>
                        </Col>                
                    </Row>
                    <Row className="mt-1">
                        <Col lg={6} md={12}>
                            <Card className="neumorphic-card">
                                <DashCard Icon={AiFillPushpin}>
                                    <h2 className="stat-text">
                                        Lorem ipsum dolor sit amet <a href="#general" className="middle">consectetur</a> adipisicing elit.
                                    </h2>                                    
                                </DashCard>
                            </Card>
                        </Col>   
                        <Col lg={6} md={12}>
                            <Card className="neumorphic-card trends-card">
                                <CardTitle className="pt-4 pl-4">
                                    <h5 className="chart-title">Lorem ipsum dolor sit amet consectetur</h5>
                                </CardTitle>
                                <CardBody>
                                    <Trend 
                                        data={[13, 10, 5, 22, 3.6, 11]}
                                        autoDraw={true}
                                        gradient={['#26DFD0', '#B8EE30', '#F62AA0']}
                                        smooth={true}
                                    />                        
                                </CardBody>
                            </Card>                           
                        </Col>                 
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default GenDash;