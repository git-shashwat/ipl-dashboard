import sensorsTypes from "./sensors.types";

export const fetchSensorDataStart = () => ({
    type: sensorsTypes.FETCH_SENSORDATA_START
});

export const fetchSensorDataSuccess = data => ({
    type: sensorsTypes.FETCH_SENSORDATA_SUCCESS,
    payload: data
});

export const fetchSensorDataFailure = errorMessage => ({
    type: sensorsTypes.FETCH_SENSORDATA_FAILURE,
    payload: errorMessage
});

export const fetchCropScoreStart = () => ({
    type: sensorsTypes.FETCH_CROPSCORE_START
});

export const fetchCropScoreSuccess = data => ({
    type: sensorsTypes.FETCH_CROPSCORE_SUCCESS,
    payload: data
});

export const fetchSCropScoreFailure = errorMessage => ({
    type: sensorsTypes.FETCH_CROPSCORE_FAILURE,
    payload: errorMessage
});

export const setSensorAlert = alert => ({
    type: sensorsTypes.SET_SENSOR_ALERT,
    payload: alert
});