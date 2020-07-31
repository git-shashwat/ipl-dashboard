import { combineReducers } from 'redux';

import weatherReducer from '../weather-report/weather.reducer';
import sensorsReducer from '../sensors/sensors.reducer';
import usersReducer from '../users/users.reducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    sensors: sensorsReducer,
    users: usersReducer
});

//TODO Add persist here if need be

export default rootReducer;