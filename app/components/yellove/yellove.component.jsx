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
import matches from '../../../matches.json';

const Yellove = () => {
    const cskWinPercentages = {}; 
    matches.forEach(match => {
        if (match.winner === "Chennai Super Kings") {
            if (!cskWinPercentages[match.season]) {
                cskWinPercentages[match.season] = 1;
            } else {
                cskWinPercentages[match.season]++;
            }
        }
    });
    Object.keys(cskWinPercentages).forEach(key => cskWinPercentages[key] = (cskWinPercentages[key] / 14) * 100);
    return (
        <div className="mt-2">
            <Row>
                <Col lg={8} md={12}>
                    <Card className="neumorphic-card mb-3" style={{ zIndex: '-1', backgroundColor: 'transparent', borderRadius: '50px' }}>
                        <Container fluid>
                            <Bar 
                                data={{
                                    labels: Object.keys(cskWinPercentages),
                                    datasets: [{
                                        label: 'Winning %',
                                        fill: false,
                                        backgroundColor: Object.keys(cskWinPercentages).map(key => {
                                            if (cskWinPercentages[key] > 75)
                                                return '#F9D030'
                                            return '#135595'
                                        }),
                                        borderColor: '#135595',
                                        data: Object.keys(cskWinPercentages).map(key => cskWinPercentages[key]),
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
                            <YelloveStat matches={matches} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Yellove;