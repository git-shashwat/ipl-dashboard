import React from 'react';
import faker from 'faker/locale/en';
import { Bar, Line } from 'react-chartjs-2';
import { AiOutlineDown } from 'react-icons/ai';
import { BsDroplet } from 'react-icons/bs';
import { FaRegLightbulb, FaThermometerHalf } from 'react-icons/fa';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Col,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button,
    // Jumbotron
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';

// import '../../../styles/components/godown-summary.styles.scss';

const labels = [
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
    faker.date.between('2015-01-01', '2015-12-31').toLocaleTimeString(),
];

const CropMonitorPage = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Row className="mb-1">
                <Col lg={ 12 }>
                    <div className="d-flex mt-3 mb-5">
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
                        <h1 className="text-warning"><b>Temperature</b></h1>
                    </div>
                    <div className="mt-lg-4 d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-between mb-lg-2">
                            <h1 style={{ fontSize: '5rem' }}><i className="fa fa-thermometer-half text-orange"></i> 37<sup><small>o</small>C</sup></h1>
                            <div className="d-flex flex-column ml-5">
                                <h3>Max: 38.21 <sup><small>o</small>C</sup></h3> 
                                <h3>Min: 34.01 <sup><small>o</small>C</sup></h3>    
                            </div>
                        </div>
                        <div className="mb-1 text-success">
                            <i className="fa mr-1 fa-caret-up"></i>
                            2.50%
                        </div>
                        <div className="pt-lg-3 pb-lg-6">
                        <Line 
                            data={{
                                labels: labels,
                                datasets: [{
                                    label: 'timestamp',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 99, 132)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    data: [0, 10, 5, 2, 20, 30, 45],
                                    radius: '20px'
                                }]
                            }}
                            legend={{
                                display: false
                            }}
                            width={900}
                            height={300}
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
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#167D7F', cursor: 'pointer' }} className="mt-3" active action>
                                            <Row>
                                                <Col xl={3} lg={3}>
                                                <h1 style={{ fontSize: '3rem' }}>
                                                    <FaThermometerHalf />
                                                </h1>
                                                </Col>
                                                <Col xl={9} lg={9}>
                                                    <h4 className="pt-4" style={{ color: '#DDFFE7' }}><b>Temperature</b></h4>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </Col>
                                    <Col xl={12} lg={12} md={4} sm={4}>
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3">
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
                                        <ListGroupItem style={{ borderRadius: '20px', backgroundColor: '#a7e2fa', cursor: 'pointer' }} className="mt-3">
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
    );
}

export default setupPage({
    pageTitle: 'Crop Monitor'
})(CropMonitorPage);