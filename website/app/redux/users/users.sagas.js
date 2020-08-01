import { takeLatest, call, put, all } from 'redux-saga/effects';
import database from '../../firebase/firebase';
import Axios from 'axios';

import userActionTypes from './users.types';
import { fetchUsersSuccess, fetchUsersFailure, pushAlertNotificationFailure, pushAlertNotificationSuccess } from './users.actions';

export function* fetchUsersAsync() {
    try {
        const querySnapshot = yield database.collection('/USERS').get();
        const users = [];
        yield querySnapshot.forEach(doc => users.push({ userId: doc.id, record: doc.data() }));
        yield put(fetchUsersSuccess(users));
    } catch (err) {
        yield put(fetchUsersFailure(err.message));
    }
};

export function* fetchUsersStart() {
    yield takeLatest(
        userActionTypes.FETCH_USERS_START,
        fetchUsersAsync
    )
};

export function* pushAlertNotificationStartAsync({ payload }) {
    console.log(payload);
    try {
        yield Axios({
            method: 'POST',
            url: 'https://asia-east2-cwc-wms.cloudfunctions.net/fcmNotificationOnPushAlertNotification',
            data: payload
        });
        yield put(pushAlertNotificationSuccess());
    } catch (err) {
        yield put(pushAlertNotificationFailure(err.message));
    }
};

export function* pushAlertNotificationStart() {
    yield takeLatest(
        userActionTypes.PUSH_ALERT_NOTIFICATION_START,
        pushAlertNotificationStartAsync
    )
};

export function* usersSagas() {
    yield all([
        call(fetchUsersStart),
        call(pushAlertNotificationStart)
    ])
};