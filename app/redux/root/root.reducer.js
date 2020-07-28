import { combineReducers } from 'redux';

import weatherReducer from '../weather-report/weather.reducer';

const rootReducer = combineReducers({
    weather: weatherReducer
});

//TODO Add persist here if need be

export default rootReducer;