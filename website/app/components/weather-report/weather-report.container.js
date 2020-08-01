import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { compose } from 'redux';

import { selectIsWeatherLoaded } from '../../redux/weather-report/weather.selectors';

import WeatherReport from './weather-report.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsWeatherLoaded(state)
});

const WeatherReportContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(WeatherReport);

export default WeatherReportContainer;
