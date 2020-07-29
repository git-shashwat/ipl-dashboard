import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    Row,
    Card,
    CardBody,
    Badge,
    CardTitle,
    Progress,
    Col
} from '../../../components';
import { setupPage } from '../../../components/Layout/setupPage';

import "../../../styles/components/status-lights.scss";
import WeatherReportContainer from '../../../components/weather-report/weather-report.container';
import WeatherAlerts from '../../../components/weather-alerts/weather-alerts.component';
import GodownSummary from '../../../components/godown-summary/godown-summary.component';
import { fetchLocationStart, fetchWeatherStart, fetchAlertsStart } from '../../../redux/weather-report/weather.actions';

const HomePage = ({ fetchLocationStart, fetchWeatherStart, fetchAlertsStart }) => {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position => {
                fetchLocationStart(position.coords),
                fetchWeatherStart(position.coords),
                fetchAlertsStart(position.coords)
            }))
        }
    }, [navigator.geolocation]);

    useEffect(() => {
        setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position => {
                    fetchWeatherStart(position.coords)
                }))
            }    
        }, 5*60*1000)   //FIXME yaha par wapas 1 min kr dena
    }, [navigator.geolocation])

    return (
        <div>
            <Row className="mb-1">
                <Col lg={ 12 }>
                    <h4 className="text-secondary">Dashboard</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={ 9 } md={8}>
                    <GodownSummary />
                    <GodownSummary />                
                </Col>
                <Col lg={ 3 } md={4}>                
                    <div className="mb-3">
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span>Weather Report</span>
                        </div>
                        <WeatherReportContainer />                
                    </div>
                    <div>
                        <div className="hr-text hr-text-left mt-2 mb-4">
                            <span>Weather Alerts</span>
                        </div>
                        <WeatherAlerts />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchLocationStart: (coords) => dispatch(fetchLocationStart(coords)),
    fetchWeatherStart: (coords) => dispatch(fetchWeatherStart(coords)),
    fetchAlertsStart: (coords) => dispatch(fetchAlertsStart(coords))
});

export default compose(
    setupPage({
        pageTitle: 'Dashboard'
    }),
    connect(undefined, mapDispatchToProps)
)(HomePage);