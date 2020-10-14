import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Row,
    Container,
    Col,
    Card,
    CardBody,
} from 'reactstrap';

import './yellove.styles.scss';

const Yellove = () => {
    return (
        <Card className="csk-card mb-3">
            <CardBody className="pt-5">
                <Row>
                    <Col lg={6} md={12}>
                        <div>
                            <p>CSK Winning % over Seasons</p>
                            <Container fluid>
                                <Line 
                                    data={{
                                        labels: ['1', '2', '3', '4', '5'],
                                        datasets: [{
                                            label: 'Score Readings',
                                            fill: false,
                                            backgroundColor: '#F9D030',
                                            borderColor: '#F9D030',
                                            data: [1, 2, 3, 4, 5],
                                            radius: '20px'
                                        }]
                                    }}
                                    options={{ 
                                        maintainAspectRatio: true, 
                                        responsive: true, 
                                        scales: {
                                            yAxes: [
                                                {
                                                    gridLines: {
                                                        display:false
                                                    },
                                                    ticks: {
                                                        display:true
                                                    },
                                                    display:true
                                                }
                                            ],
                                            xAxes: [{
                                                gridLines: {
                                                    display:false
                                                },
                                                display: true 
                                            }]
                                        },
                                        legend: {
                                            display: false
                                        },
                                        tooltips: {
                                            enabled: true
                                        }
                                    }}
                                />
                            </Container>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="d-flex flex-column justify-content-between">
                        <div className="mt-3 yellove-trivia">
                            <h1>This is a stat <span className="yellove-text">%</span> - typewriter-effect</h1>
                        </div>
                        <div className="mt-3 yellove-stat">
                            <h1>This is a trivia</h1>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Yellove;