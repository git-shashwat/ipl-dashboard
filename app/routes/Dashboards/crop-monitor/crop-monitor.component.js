import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Bar, Line } from 'react-chartjs-2';
import { AiOutlineDown } from 'react-icons/ai';
import { BsDroplet } from 'react-icons/bs';
import { FaRegLightbulb, FaThermometerHalf } from 'react-icons/fa';
import {
    Row,
    ListGroupItem,
    Col,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button,
    Alert
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectSensorsData } from '../../../redux/sensors/sensors.selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { filterSensorDataByTag } from '../../../redux/sensors/sensors.utils';

const CropMonitorPage = ({ sensorsData }) => {
    const [focussedSensorData, setFocussedSensorData] = useState({
        name: '',
        icon: '',
        unit: '',
        theme: '',
        data: [],
        labels: [],
        liveReading: null,
        maxReading: null,
        minReading: null,
        percentChange: null,
        upTime: null,
        status: ''
    });

    useEffect(() => {
        if(sensorsData.length !== 0) {
            const { data, labels } = filterSensorDataByTag(sensorsData, 'temperature');
            setFocussedSensorData({
                name: 'Temperature',
                unit: 'oC',
                icon: 'fa fa-thermometer-half',
                theme: 'orange',
                data,
                labels,
                liveReading: data[0],
                maxReading: Math.max(...data),
                minReading: Math.min(...data),
                percentChange: (Math.abs(data[0]-data[1])/data[0] * 100).toFixed(2),
                upTime: labels[0] - labels[labels.length - 1]
            });
        }
    }, [sensorsData]);

    const handleClick = (e, tag) => {
        const { data, labels } = filterSensorDataByTag(sensorsData, tag);
        const units = {
            temperature: 'oC',
            humidity: 'air g.kg-1',
            light: 'units'
        };
        const icons = {
            temperature: 'fa fa-thermometer-half',
            humidity: 'fa fa-tint',
            light: 'fa fa-lightbulb-o'
        };
        const themes = {
            temperature: 'orange',
            humidity: 'primary',
            light: 'yellow'
        };
        setFocussedSensorData({
            name: tag.toUpperCase(),
            data,
            labels,
            icon: icons[tag],
            theme: themes[tag],
            unit: units[tag],
            liveReading: data[0],
            maxReading: Math.max(...data),
            minReading: Math.min(...data),
            percentChange: (Math.abs(data[0]-data[1])/data[0] * 100).toFixed(2),
            upTime: labels[0] - labels[labels.length - 1]
        });
    }

    return (
        <div>
            {!!sensorsData ? (
                <div>
                <Row className="mb-1">
                <Col lg={ 12 }>
                    <div className="d-flex mt-3 mb-3">
                        <h4 className="text-primary"><b>Sensors Monitor Dashboard</b></h4>
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
                        </ButtonToolbar>
                    </div>
                </Col>
            </Row>
            <div className="bg-white" style={{ borderRadius: '20px' }}>
                <Row>
                    <Col xl={9} lg={9}>
                    <div className="d-flex flex-column pt-lg-4 pl-lg-4">
                        <h2 className="text-secondary"><b>Compartment</b></h2>
                        <h1 className={`text-${focussedSensorData.theme}`}><b>{focussedSensorData.name}</b></h1>
                    </div>
                    <div className="mt-lg-4 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-between mb-lg-2">
                            <h1 style={{ fontSize: '5rem' }}><i className={`${focussedSensorData.icon} text-${focussedSensorData.theme}`}></i> {focussedSensorData.liveReading}<small>{focussedSensorData.unit}</small></h1>
                            <div className="d-flex flex-column ml-5">
                                <h3>Max: {focussedSensorData.maxReading} <small>{focussedSensorData.unit}</small></h3> 
                                <h3>Min: {focussedSensorData.minReading} <small>{focussedSensorData.unit}</small></h3>    
                            </div>
                        </div>
                        <div className="mb-1 text-success">
                            <i className="fa mr-1 fa-caret-up"></i>
                            {focussedSensorData.percentChange} %
                        </div>
                        <div className="mt-2 mb-1 d-flex flex-column">
                            <h6><b>Sensor Up-Time</b>: {focussedSensorData.upTime}</h6> {/* TODO yaha current timestamp - earliest timestamp krna hai */}
                            <h6><b>Status</b>: Active</h6>
                        </div>
                        <div className="mt-4">
                            <h5><b>Max Projected Value: {focussedSensorData.liveReading + 2.37} <smal>{focussedSensorData.unit}</smal></b></h5>
                            <h5><b>Min Projected Value: {focussedSensorData.liveReading - 2.37} <smal>{focussedSensorData.unit}</smal></b></h5>
                        </div>
                        <div className="mt-2 pt-lg-3 pb-lg-5">
                        <Line 
                            data={{
                                labels: focussedSensorData.labels,
                                datasets: [{
                                    label: 'Sensor Readings',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 99, 132)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: focussedSensorData.data,
                                    radius: '20px'
                                }]
                            }}
                            legend={{
                                display: true
                            }}
                            width={1000}
                            height={400}
                            options={{ 
                                maintainAspectRatio: false, 
                                responsive: true, 
                                scales: {
                                    yAxes: [
                                        {
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                display: true
                                            },
                                            display: true
                                        }
                                    ],
                                    xAxes: [{
                                        gridLines: {
                                            display: true
                                        },
                                        display: true
                                    }]
                                },
                                tooltips: {
                                    enabled: true
                                }
                            }}
                        />                
                        </div>
                    </div>                
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className="d-flex flex-column bg-light">
                            <h5 className="mt-3 pl-5"><b>Sensors Connected <AiOutlineDown /></b></h5>
                            <div style={{ padding: '2em 2em', paddingBottom: '16em' }}>
                                <Row>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'temperature')} action>
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                <h1 style={{ fontSize: '3rem' }}>
                                                    <FaThermometerHalf />
                                                </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Temperature</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'humidity')} >
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                    <h1 style={{ fontSize: '3rem' }}>
                                                        <BsDroplet />
                                                    </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Humidity</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'light')} >
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                    <h1 style={{ fontSize: '3rem' }}>
                                                        <FaRegLightbulb />
                                                    </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Light Intensity</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>    
                </div>
            ) : (
                <Alert></Alert>
            )}              
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sensorsData: selectSensorsData
});

export default compose(
    setupPage({
        pageTitle: 'Crop Monitor'
    }),
    connect(mapStateToProps)
)(CropMonitorPage);
