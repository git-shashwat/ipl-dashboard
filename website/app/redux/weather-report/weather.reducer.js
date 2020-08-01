import weatherActionTypes from './weather.types';

const INITIAL_STATE = {
    isFetchingLocation: false,
    isFetchingWeather: false,
    isFetchingAlerts: false,
    weather: null,
    location: null,
    alerts: null,
    errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case weatherActionTypes.FETCH_LOCATION_START:
            return {
                ...state,
                isFetchingLocation: true
            }

        case weatherActionTypes.FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                isFetchingLocation: false,
                location: action.payload
            }

        case weatherActionTypes.FETCH_LOCATION_FAILURE:
            return {
                ...state,
                isFetchingLocation: false,
                errorMessage: action.payload
            }
        case weatherActionTypes.FETCH_WEATHER_START:
            return {
                ...state,
                isFetchingWeather: true
            }

        case weatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isFetchingWeather: false,
                weather: action.payload
            }

        case weatherActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                isFetchingWeather: false,
                errorMessage: action.payload
            }

        case weatherActionTypes.FETCH_ALERTS_START:
            return {
                ...state,
                isFetchingAlerts: true
            }

        case weatherActionTypes.FETCH_ALERTS_SUCCESS:
            return {
                ...state,
                isFetchingAlerts: false,
                alerts: action.payload
            }

        case weatherActionTypes.FETCH_ALERTS_FAILURE:
            return {
                ...state,
                isFetchingAlerts: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
} 