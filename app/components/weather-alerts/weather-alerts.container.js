import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { compose } from 'redux';

import { selectIsAlertsLoaded } from '../../redux/weather-report/weather.selectors';

import WeatherAlerts from './weather-alerts.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsAlertsLoaded(state)
});

const WeatherAlertsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(WeatherAlerts);

export default WeatherAlertsContainer;
