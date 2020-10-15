import React from 'react';
import { Bar } from 'react-chartjs-2';
// import 'chartjs-plugin-datalabels';
import {
    Row,
    Container,
    Col,
    Card,
} from 'reactstrap';

import YelloveStat from '../yellove-stat/yellove-stat.component.jsx';

import './yellove.styles.scss';

const Yellove = () => {
    return (
        <div className="mt-2">
            <Row>
                <Col lg={8} md={12}>
                    <Card className="mb-3" style={{ zIndex: '-1', backgroundColor: 'transparent', borderRadius: '50px' }}>
                        <Container fluid>
                            <Bar 
                                data={{
                                    labels: ['1', '2', '3', '4', '5'],
                                    datasets: [{
                                        label: 'Winning %',
                                        fill: false,
                                        backgroundColor: ['#135595', '#F9D030', '#135595', '#F9D030', '#135595'],
                                        borderColor: '#135595',
                                        data: [1, 2, 3, 4, 5],
                                        radius: '20px'
                                    }]
                                }}
                                options={{ 
                                    maintainAspectRatio: true, 
                                    responsive: true, 
                                    title: {
                                        display: true,
                                        fontColor: 'white',
                                        text: 'CSK Winning % over years'
                                    },
                                    scales: {
                                        yAxes: [
                                            {
                                                gridLines: {
                                                    display:false
                                                },
                                                ticks: {
                                                    fontColor: '#26DFD0',
                                                    beginAtZero: true
                                                }
                                            }
                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display:false
                                            },
                                            ticks: {
                                                fontColor: '#26DFD0'
                                            },
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
                    </Card>
                </Col>
                <Col lg={4} md={12} className="d-flex flex-column">
                    <Card className="neumorphic-card yellove-stat">
                            <YelloveStat />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Yellove;