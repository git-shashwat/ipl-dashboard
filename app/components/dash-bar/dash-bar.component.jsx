import React from 'react';
import { easeQuadInOut } from 'd3-ease';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Card, Col, Row, Table } from 'reactstrap';

import './AnimatedProgressProvider.js';
import AnimatedProgressProvider from './AnimatedProgressProvider.js';
import './dash-bar.styles.scss';

const DashBar = () => {
    const value = 77;
    return (
        <Card className="dashbar-container neumorphic-card d-flex flex-column">
            <div className="bar-container">
                <Row>
                    <Col lg={6} md={6} sm={12} className="circular-graph">
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={value}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                        >
                            {(value) => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={roundedValue} 
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            strokeLinecap: 'round',
                                            pathColor: ' rgba(248,80,50,1)',
                                            textColor: '#F9D030'
                                        })}
                                    /> 
                                );
                            }}                       
                        </AnimatedProgressProvider>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex flex-column justify-content-center">
                        <h1 className="ml-3">Lorem ipsum dolor sit amet consectetur</h1>                    
                    </Col>
                </Row>  
            </div>
            <div className="mt-2 stat-table">
                <Table striped responsive hover>
                    <thead>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default DashBar;