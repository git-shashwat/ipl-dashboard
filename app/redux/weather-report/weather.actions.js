import weatherActionTypes from './weather.types';

export const fetchLocationStart = coords => ({
    type: weatherActionTypes.FETCH_LOCATION_START,
    payload: coords
});

export const fetchLocationSuccess = address => ({
    type: weatherActionTypes.FETCH_LOCATION_SUCCESS,
    payload: address
});

export const fetchLocationFailure = errorMessage => ({
    type: weatherActionTypes.FETCH_LOCATION_FAILURE,
    payload: errorMessage
});

export const fetchWeatherStart = coords => ({
    type: weatherActionTypes.FETCH_WEATHER_START,
    payload: coords
});

export const fetchWeatherSuccess = weather => ({
    type: weatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
});

export const fetchWeatherFailure = errorMessage => ({
    type: weatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: errorMessage
});
