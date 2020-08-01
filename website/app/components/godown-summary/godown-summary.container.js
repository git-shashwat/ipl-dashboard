import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { compose } from 'redux';

import { selectIsSensorsLoaded } from '../../redux/sensors/sensors.selectors';

import GodownSummary from './godown-summary.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsSensorsLoaded(state)
});

const GodownSummaryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(GodownSummary);

export default GodownSummaryContainer;
