import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import {
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TasksMedia
} from "../../components/ProjectsDashboards/TasksMedia";
import {
    TinyDonutChart
} from "../../components/ProjectsDashboards/TinyDonutChart"
import {
    TinyDonutChartAllProjects
} from "../../components/ProjectsDashboards/TinyDonutChartAllProjects"
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini"
import { DraggableProjects } from './DraggableProjects';
import TasksList from '../../Apps/Tasks/TasksList';

const ProjectsDashboard = () => (
    <div>
        <Row className="mb-5">
            <Col lg={ 12 }>
                <h4 className="text-secondary">Activity Management Dashboard</h4>
                <p>
                    Assign Tasks to warehouse workers and keep a close check on activities taking place in the warehouse 🔎
                </p>
            </Col>
            <Col>
                <div className="hr-text hr-text-left my-2">
                    <span>All Tasks</span>
                </div>
                <Media>
                    <Media left className="mr-3">
                        <TinyDonutChart />
                    </Media>
                    <Media body>
                        <div>
                            <i className="fa fa-circle mr-1 text-yellow"></i> 
                            <span className="text-inverse">23</span> Pending
                        </div>
                        <div>
                            <i className="fa fa-circle mr-1 text-danger"></i> 
                            <span className="text-inverse">3</span> Behind
                        </div>
                        <div>
                            <i className="fa fa-circle mr-1 text-success"></i> 
                            <span className="text-inverse">34</span> Completed
                        </div>
                    </Media>
                </Media>
            </Col>
            <Col>
                <div className="hr-text hr-text-left my-2">
                    <span>My Stats</span>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>Open Tasks</CardTitle>
                                <h3>26</h3>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>Assignees</CardTitle>
                                <h3>7</h3>
                            </CardBody>
                        </Card>                    
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="mb-3">
                            Tasks
                        </CardTitle>
                        <TasksList />
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6">
                            Timeline Mini
                        </CardTitle>
                        <TimelineMini 
                            showPillDate
                                pillDate="2 Days ago"
                            icon="times-circle"
                                iconClassName="text-danger"
                            badgeTitle="Alert"
                                badgeColor="danger"
                        />
                        <TimelineMini 
                            icon="question-circle"
                                iconClassName="text-warning"
                            badgeTitle="Warning"
                                badgeColor="warning"
                        />
                        <TimelineMini 
                            icon="info-circle"
                                iconClassName="text-info"
                            badgeTitle="Info"
                                badgeColor="info"
                        />
                        <TimelineMini 
                            showPillDate
                                pillDate="Yesterday"
                            icon="plus-circle"
                                iconClassName="text-primary"
                            badgeTitle="Message"
                                badgeColor="primary"
                        />
                        <TimelineMini 
                            icon="check-circle"
                                iconClassName="text-success"
                            badgeTitle="Success"
                                badgeColor="success"
                        />
                        <TimelineMini 
                            icon="circle"
                            badgeTitle="Obsolete"
                        />
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem action tag={ Link } to="/pages/timeline" className="text-center">
                            Timeline Details
                            <i className="fa fa-angle-right ml-2"></i>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
);

export default setupPage({
    pageTitle: 'Projects Dashboard'
})(ProjectsDashboard);