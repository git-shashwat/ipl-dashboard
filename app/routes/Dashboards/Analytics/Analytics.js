import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_US';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import {
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FloatGrid as Grid,
    Card,
    Media,
    CardBody,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    Button,
    CardHeader
} from './../../../components';
import { applyColumn } from './../../../components/FloatGrid';

import {
    MetricVsTarget
} from "../../components/Analytics/MetricVsTarget";
import {
    WebsitePerformance
} from "../../components/Analytics/WebsitePerformance";
import {
    AudienceMetricsChart
} from "./components/AudienceMetricsChart";
import {
    TinyAreaChart
} from "../../components/Analytics/TinyAreaChart";
import {
    SimpleLineChart
} from "./../../Graphs/ReCharts/components/SimpleLineChart";

import classes from './Analytics.scss';

const LAYOUT = {
    'cumulative-health-score': { h: 9, minH: 7 },
    'health-score': { md: 6, h: 7 }
}

const SessionByDevice = (props) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);
SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
}

export class Analytics extends React.Component {
    state = {
        layouts: _.clone(LAYOUT)
    }

    _resetLayout = () => {
        this.setState({
            layouts: _.clone(LAYOUT)
        })
    }

    render() {
        const { layouts } = this.state;

        return (
            <div>
                <div fluid={ false }>
                    <div className="d-flex mt-3 mb-5">
                        <h4 className="text-secondary">Crop Health Dashboard</h4>
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-building text-body mr-2"></i>
                                        Godown 1<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Godown:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Godown 2
                                        </DropdownItem>
                                        <DropdownItem>
                                            Godown 3
                                        </DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-building text-body mr-2"></i>
                                        Compartment 1<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Compartment:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Compartment 2
                                        </DropdownItem>
                                        <DropdownItem>
                                            Compartment 3
                                        </DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>                            
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        Last Month<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Period:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Last Month
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 3 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 6 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last Year
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Custom...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start">
                                <Button color="primary" className="mb-2 mr-2 px-3">
                                    Apply
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button
                                    color="link"
                                    className="mb-2 text-decoration-none align-self-start"
                                    onClick={this._resetLayout}
                                >
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <Row>
                    <Col xl={4} lg={4}>
                        <div className="mb-2">
                            <h3>Comodities Stored</h3>
                            <h6 className="text-secondary">Select a commodity to check it's health score</h6>
                                <ListGroup>
                                    <ListGroupItem color="primary" active action>Corn</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Wheat</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Rice</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Bajra</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Moong</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Chana</ListGroupItem>
                                </ListGroup>                        
                        </div>
                    </Col>
                    <Col xl={8} lg={8}>
                        <div { ...(applyColumn('cumulative-health-score', layouts)) } className="mb-3">
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-4 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2 text-body"></i> Cumulative Health Score
                                </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-4">
                                            <h2>
                                                84/100
                                            </h2>
                                            <div className="mb-1 text-success">
                                                <i className="fa mr-1 fa-caret-up"></i>
                                                2.50%
                                            </div>
                                            <div>
                                                vs 82/100 (prev.)
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardBody className="p-0">
                                        <TinyAreaChart height={ 100 } />
                                    </CardBody>                                    
                            </Card>
                        </div>                    
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                        <span className="h6">
                                            <i className="fa fa-ellipsis-v text-body mr-2"></i> Temperature Score
                                        </span>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-4">
                                            <h2>
                                                94/100
                                            </h2>
                                            <div className="mb-1 text-danger">
                                                <i className="fa mr-1 fa-caret-down"></i>
                                                1.2%
                                            </div>
                                            <div>
                                                vs 90/100 (prev.)
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardBody className="p-0">
                                        <TinyAreaChart height={ 100 } />
                                    </CardBody>
                                </Card>                            
                            </Col>
                            <Col>
                                <Card>
                                    <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                        <span className="h6">
                                            <i className="fa fa-ellipsis-v text-body mr-2"></i> Humidity Score
                                        </span>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-4">
                                            <h2>
                                                62/100
                                            </h2>
                                            <div className="mb-1 text-success">
                                                <i className="fa mr-1 fa-caret-up"></i>
                                                0.9%
                                            </div>
                                            <div>
                                                vs 63/100 (prev.)
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardBody className="p-0">
                                        <TinyAreaChart height={ 100 } />
                                    </CardBody>
                                </Card>                            
                            </Col>
                            <Col>
                                <Card>
                                    <CardHeader className="d-flex bb-0 pt-3 bg-none">
                                        <span className="h6">
                                            <i className="fa fa-ellipsis-v text-body mr-2"></i> Light Intensity Score
                                        </span>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-4">
                                            <h2>
                                                100/100
                                            </h2>
                                            <div className="mb-1 text-success">
                                                <i className="fa mr-1 fa-caret-up"></i>
                                                23.34%
                                            </div>
                                            <div>
                                                vs 87/100 (prev.)
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardBody className="p-0">
                                        <TinyAreaChart height={ 100 } />
                                    </CardBody>
                                </Card>                            
                            </Col>                            
                        </Row>                     
                    </Col>
                </Row>
            </div>
        );
    }
}
