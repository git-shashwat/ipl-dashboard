/* eslint-disable react/prop-types */
import React from 'react';
import { easeQuadInOut } from 'd3-ease';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Card, Col, Row, Table } from 'reactstrap';

import './AnimatedProgressProvider.js';
import AnimatedProgressProvider from './AnimatedProgressProvider.js';
import './dash-bar.styles.scss';
import statsGenerator from '../../utils/statsGenerator.js';

const DashBar = ({ matches }) => {
    const stats = statsGenerator(matches);

    const value = stats.dl_field_champ_per;
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
                        <h1 className="ml-3">of Matches played under d/l method are won by teams fielding first</h1>                    
                    </Col>
                </Row>  
            </div>
            <div className="mt-2 stat-table">
                <h5>Top Performing Franchises (Overall)</h5>
                <Table striped responsive hover>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Team Name</th>
                            <th>Win Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.top_performing_teams.map((team, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{team.team_name}</td>
                                <td>{team.win_count}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default DashBar;