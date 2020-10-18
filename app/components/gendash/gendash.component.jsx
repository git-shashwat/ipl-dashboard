import React from 'react';
import { Card, Row, Col, CardTitle, CardBody } from 'reactstrap';
import { AiFillPushpin, AiTwotoneFire } from 'react-icons/ai';
import Trend from 'react-trend';
import './gendash.styles.scss';
import DashCard from '../dash-card/dash-card.component.jsx';
import DashBar from '../dash-bar/dash-bar.component.jsx';
import matches from '../../../matches.json';
import statsGenerator from '../../utils/statsGenerator';

const GenDash = () => {
    const stats = statsGenerator(matches);
    return (
        <div id="general" className="mt-5">
            <Row>
                <Col lg={6} md={12} className="trends-chart order-md-2">
                    <DashBar matches={matches} />
                </Col>            
                <Col className="mb-5 order-md-1" lg={6} md={12}>                
                    <Row>
                        <Col lg={6} md={12} className="d-flex align-items-end">
                            <Card className="neumorphic-card trends-card">
                                <CardTitle className="pt-4 pl-4">
                                    <h5 className="chart-title">Punjabi Player of Match over the seasons</h5>
                                </CardTitle>
                                <CardBody>
                                    <Trend 
                                        data={stats.punjabi_count}
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
                                        With <a href="#general" className="middle">{stats.max_pm_count.count}</a> Player of the Match awards, <a href="#general" className="middle">{stats.max_pm_count.player}</a> leads the board!
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
                                        With <a href="#general" className="middle">{stats.best_batting_team.count}</a> wins by wickets, <a href="#general" className="middle">{stats.best_batting_team.team}</a> has the most explosive batting lineup.
                                    </h2>                                    
                                </DashCard>
                            </Card>
                            <Card className="neumorphic-card trends-card">
                            <CardTitle className="pt-4 pl-4">
                                <h5 className="chart-title">*Rains*</h5>
                                <h5>Mumbai: \(◦&#39;⌣&#39;◦)/</h5>
                                <h5>Delhi: </h5>
                            </CardTitle>
                            <CardBody>
                                <Trend 
                                    data={stats.dd_dl_perf}
                                    autoDraw={true}
                                    gradient={['#65FC6A', '#FF0BAC', '#E4F995']}
                                    smooth={true}
                                />                        
                            </CardBody>
                        </Card>
                        </Col>   
                        <Col lg={6} md={12}>
                            <Card className="neumorphic-card trends-card">
                                <CardTitle className="pt-4 pl-4">
                                    <h5 className="chart-title">RCB&#39;s hope of winning IPL, lol</h5>
                                </CardTitle>
                                <CardBody>
                                    <Trend 
                                        data={stats.rcb_hope_per}
                                        autoDraw={true}
                                        gradient={['#26DFD0', '#B8EE30', '#F62AA0']}
                                        smooth={true}
                                    />                        
                                </CardBody>
                            </Card> 
                            <Card className="mt-1 neumorphic-card">
                                <DashCard Icon={AiFillPushpin}>
                                    <h2 className="stat-text">
                                    With <a href="#general" className="middle">{stats.best_bowling_team.count}</a> wins by runs, <a href="#general" className="middle">{stats.best_bowling_team.team}</a> has the most destructive bowling lineup.
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