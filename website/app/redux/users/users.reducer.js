import usersActionTypes from './users.types';

const INITIAL_STATE = {
    users: null,
    isFetching: false,
    isPushingNotification: false,
    isNotificationPushed: false,
    errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.FETCH_USERS_START:
            return {
                ...state,
                isFetching: true
            }

        case usersActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetching: false
            }

        case usersActionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case usersActionTypes.PUSH_ALERT_NOTIFICATION_START:
            return {
                ...state,
                isPushingNotification: true
            }

        case usersActionTypes.PUSH_ALERT_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isPushingNotification: true
            }

        case usersActionTypes.PUSH_ALERT_NOTIFICATION_FAILURE:
            return {
                ...state,
                isPushingNotification: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
};