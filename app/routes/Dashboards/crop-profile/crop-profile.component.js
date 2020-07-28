import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import _ from 'lodash';
import {
    FloatGrid as Grid,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader
} from '../../../components';
import { applyColumn } from '../../../components/FloatGrid';

import {
    TinyAreaChart
} from "../../components/Analytics/TinyAreaChart";

import classes from '../Analytics/Analytics.scss';

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

export default class CropProfileDashboard extends React.Component {
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
                        <h4 className="text-secondary">Crop Profile Database</h4>
                    </div>
                </div>
                <Row>
                    <Col xl={4} lg={4}>
                        <div className="mb-2">
                            <h3>Comodities Stored</h3>
                            <h6 className="text-secondary">Select a commodity to see it's profile</h6>
                                <ListGroup>
                                    <ListGroupItem active tag="a" href="#" action>Corn</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Wheat</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Rice</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Bajra</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Moong</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Chana</ListGroupItem>
                                </ListGroup>                        
                        </div>
                        <div className="mb-2">
                            <Card>
                                    <CardBody>
                                        <div className="text-center">
                                            <h2>
                                                <Button color="primary">
                                                    Add New Commodity
                                                    <span className="ml-2"><AiOutlinePlusCircle /></span>
                                                </Button>
                                            </h2>
                                        </div>
                                    </CardBody>                                 
                            </Card>                            
                        </div>
                    </Col>
                    <Col xl={8} lg={8}>
                        <div { ...(applyColumn('cumulative-health-score', layouts)) } className="mb-3">
                            <Card>
                                <CardHeader className="bb-0 pt-3 pb-4 bg-none" tag="h6">
                                    <i className="fa fa-ellipsis-v mr-2 text-body"></i> Crop Profile
                                </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-4">
                                            <h1>
                                                CORN
                                            </h1>
                                        </div>
                                        <div>
                                            <h5>Category: Grains</h5>
                                            <h5>Storage Duration: 3 Months</h5>
                                            <div>
                                                <h4>Atmospheric Contditions Threshold</h4>
                                                <h5>Temperature: 32 <sup>o</sup>C</h5>
                                                <h5>Moiture: 20 Units</h5>
                                                <h5>Relative Humidity: 25 Units</h5>
                                                <h5>Light Intensity: 30 Units</h5>
                                            </div>
                                            <div>
                                                <h4>Maintainance Activities</h4>
                                                <h5>Activity 1</h5>
                                                <h5>Activity 2</h5>
                                                <h5>Activity 3</h5>
                                                <Button color="primary">Add new activity <span><AiOutlinePlusCircle /></span></Button>
                                            </div>
                                        </div>
                                    </CardBody>                                    
                            </Card>
                        </div>                    
                    </Col>
                </Row>
            </div>
        );
    }
}
