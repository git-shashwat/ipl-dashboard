import React from 'react';
import { createStructuredSelector } from 'reselect';
import Trend from 'react-trend';
import { AiOutlineDown } from 'react-icons/ai';
import { GiCorn, GiWheat, GiGrain } from 'react-icons/gi';
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

const CropExaminePage = ({ sensorsData }) => {
    const [focussedCrop, setFocussedCrop] = useState({
        name: '',
        icon: '',
        theme: '',
        data: [],
        liveReading: null,
        percentChange: null,
    });

    useEffect(() => {
        if(cropData.length !== 0) {
            const { data } = filterCropDataByTag(cropData, 'corn');
            setfocussedCropData({
                name: 'CORN',
                icon: <GiCorn />,
                theme: 'yellow',
                data,
                liveReading: data[0],
                percentChange: (Math.abs(data[0]-data[1])/data[0] * 100).toFixed(2),
            });
        }
    }, [cropData]);

    const handleClick = (e, tag) => {
        const { data } = filterCropDataByTag(cropData, tag);
        const icons = {
            corn: <GiCorn />,
            wheat: <GiWheat />,
            rice: <GiGrain />
        };
        const themes = {
            corn: 'yellow',
            wheat: 'secondary',
            rice: 'light'
        };
        setFocussedCrop({
            name: tag.toUpperCase(),
            data,
            icon: icons[tag],
            theme: themes[tag],
            liveReading: data[0],
            percentChange: (Math.abs(data[0]-data[1])/data[0] * 100).toFixed(2),
        });
    }

    return (
        <div>
            {!!cropData ? (
                <div>
                <Row className="mb-1">
                <Col lg={ 12 }>
                    <div className="d-flex mt-3 mb-3">
                        <h4 className="text-primary"><b>Crop Health Trends</b></h4>
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
                        <h1 className={`text-${focussedCropData.theme}`}><b>{focussedCropData.name}</b></h1>
                    </div>
                    <div className="mt-lg-4 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-between mb-lg-2">
                            <h1 style={{ fontSize: '5rem' }}><span className={`${focussedCrop.theme}`}>{focussedCrop.icon}</span> {focussedCropData.liveReading}</h1>
                        </div>
                        <div className="mb-1 text-success">
                            <i className="fa mr-1 fa-caret-up"></i>
                            {focussedCropData.percentChange} %
                        </div>
                        <div className="mt-2 pt-lg-3 pb-lg-5">
                        <Trend 
                            data={focussedCrop.data}
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-in"
                        />               
                        </div>
                    </div>                
                    </Col>
                    <Col xl={3} lg={3}>
                        <div className="d-flex flex-column bg-light">
                            <h5 className="mt-3 pl-5"><b>Crops Present <AiOutlineDown /></b></h5>
                            <div style={{ padding: '2em 2em', paddingBottom: '16em' }}>
                                <Row>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'corn')} action>
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                <h1 style={{ fontSize: '3rem' }}>
                                                    <GiCorn />
                                                </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Corn</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'wheat')} >
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                    <h1 style={{ fontSize: '3rem' }}>
                                                        <GiWheat />
                                                    </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Wheat</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3" onClick={(e) => handleClick(e, 'rice')} >
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                    <h1 style={{ fontSize: '3rem' }}>
                                                        <GiGrain />
                                                    </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#167D7F' }}><b>Rice</b></h4>
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
)(CropExaminePage);