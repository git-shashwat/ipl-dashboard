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

export const setSensorAlert = alert => ({
    type: sensorsTypes.SET_SENSOR_ALERT,
    payload: alert
});