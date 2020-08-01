import usersActionTypes from './users.types';

export const fetchUsersStart = () => ({
    type: usersActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
    type: usersActionTypes.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = errorMessage => ({
    type: usersActionTypes.FETCH_USERS_FAILURE,
    payload: errorMessage
});

export const pushAlertNotificationStart = notification => ({
    type: usersActionTypes.PUSH_ALERT_NOTIFICATION_START,
    payload: notification
});

export const pushAlertNotificationSuccess = () => ({
    type: usersActionTypes.PUSH_ALERT_NOTIFICATION_SUCCESS
});

export const pushAlertNotificationFailure = errorMessage => ({
    type: usersActionTypes.PUSH_ALERT_NOTIFICATION_FAILURE,
    payload: errorMessage
});