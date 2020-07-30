//FIXME add api keys as env vars

import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import Axios from 'axios';

import weatherActionTypes from './weather.types';
import { fetchLocationSuccess, fetchLocationFailure, fetchWeatherSuccess, fetchWeatherFailure, fetchAlertsSuccess, fetchAlertsFailure } from './weather.actions';

export function* fetchLocationAsync({ payload: { longitude, latitude } }) {
    try {
        const { data } = yield Axios({
            method: 'GET',
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoicnhzaGFzaHdhdCIsImEiOiJjazBkbGNidHAwMTExM25rZnJpamdsNDF6In0.gw4VuFWLXxk6kdY_zxTPgw&limit=1`
        })
        yield put(fetchLocationSuccess(data.features[0].place_name));
    } catch (err) {
        yield put(fetchLocationFailure(err.message));
    }
};

export function* fetchLocationStart() {
    yield takeLatest(
        weatherActionTypes.FETCH_LOCATION_START,
        fetchLocationAsync
    )
};

export function* fetchWeatherAsync({ payload: { longitude, latitude } }) {
    try {
        const { data } = yield Axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a16947a5aab9949a9df758cb2047b23a&units=metric`
        })
        yield put(fetchWeatherSuccess(data));
    } catch (err) {
        yield put(fetchWeatherFailure(err.message));
    }
};

export function* fetchWeatherStart() {
    yield takeLatest(
        weatherActionTypes.FETCH_WEATHER_START,
        fetchWeatherAsync
    )
};

export function* fetchAlertsAsync({ payload: { longitude, latitude } }) {
    try {
        const { data } = yield Axios({
            method: 'GET',
            url: `https://api.weatherbit.io/v2.0/alerts?lat=26.2006&lon=92.9376&key=dec20fa3663f4d98825ae04dba9475c9`
        })
        yield put(fetchAlertsSuccess(data));
    } catch (err) {
        yield put(fetchAlertsFailure(err.message));
    }
};

export function* fetchAlertsStart() {
    yield takeLatest(
        weatherActionTypes.FETCH_ALERTS_START,
        fetchAlertsAsync
    )
};


export function* weatherSagas() {
    yield all([
        call(fetchLocationStart),
        call(fetchWeatherStart),
        call(fetchAlertsStart)
    ])
};