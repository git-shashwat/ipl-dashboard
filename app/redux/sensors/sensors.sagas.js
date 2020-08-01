import { takeLatest, call, put, all } from 'redux-saga/effects';
import database from '../../firebase/firebase';

import sensorsTypes from './sensors.types';
import { fetchSensorDataSuccess, fetchSensorDataFailure } from './sensors.actions';

export function* fetchSensorDataAsync() {
    try {
        const querySnapshot = yield database.collection('/SENSOR_DATA/godown-1/compartment-1').orderBy("timestamp", "desc").limit(12).get(); //FIXME Alter this limit to get as many latest records as you like
        const data = [];
        yield querySnapshot.forEach(doc => data.push({ timestamp: doc.id, record: doc.data() }));
        yield put(fetchSensorDataSuccess(data));
    } catch (err) {
        yield put(fetchSensorDataFailure(err.message));
    }
};

export function* fetchSensorDataStart() {
    yield takeLatest(
        sensorsTypes.FETCH_SENSORDATA_START,
        fetchSensorDataAsync
    )
};

export function* sensorSagas() {
    yield all([
        call(fetchSensorDataStart),
    ])
};