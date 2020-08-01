import { all, call } from 'redux-saga/effects';
import { weatherSagas } from '../weather-report/weather.sagas';
import { sensorSagas } from '../sensors/sensors.sagas';
import { usersSagas } from '../users/users.sagas';

export default function* rootSaga() {
    yield all([
        call(weatherSagas),
        call(sensorSagas),
        call(usersSagas)
    ]);
};