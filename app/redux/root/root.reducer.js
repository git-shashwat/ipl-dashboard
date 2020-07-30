import { combineReducers } from 'redux';

import weatherReducer from '../weather-report/weather.reducer';
import sensorsReducer from '../sensors/sensors.reducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    sensors: sensorsReducer
});

//TODO Add persist here if need be

export default rootReducer;