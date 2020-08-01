import sensorsTypes from "./sensors.types";

const INITIAL_STATE = {
    isFetching: false,
    cropScore: null,
    data: null,
    errorMessage: null,
    alert: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case sensorsTypes.FETCH_SENSORDATA_START: 
            return {
                ...state,
                isFetching: true
            }

        case sensorsTypes.FETCH_SENSORDATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }

        case sensorsTypes.FETCH_SENSORDATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case sensorsTypes.FETCH_CROPSCORE_START: 
            return {
                ...state,
                isFetching: true
            }

        case sensorsTypes.FETCH_CROPSCORE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cropScore: action.payload
            }

        case sensorsTypes.FETCH_CROPSCORE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }            

        case sensorsTypes.SET_SENSOR_ALERT:
            return {
                ...state,
                alert: action.payload
            }

        default: 
            return state;
    }
} 