import { all, call } from 'redux-saga/effects';
import { weatherSagas } from '../weather-report/weather.sagas';
import { sensorSagas } from '../sensors/sensors.sagas';

export default function* rootSaga() {
    yield all([
        call(weatherSagas),
        call(sensorSagas)
    ]);
};