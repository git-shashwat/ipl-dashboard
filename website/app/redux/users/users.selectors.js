import { createSelector } from 'reselect';
import { getUsersFCMTokens } from './users.utils';

export const selectUsers = state => state.users;

export const selectUsersData = createSelector(
    [selectUsers],
    users => users.users
);

export const selectUsersFCMTokens = createSelector(
    [selectUsersData],
    users => !!users ? getUsersFCMTokens(users): []
);

export const selectIsFetchingUsers = createSelector(
    [selectUsers],
    users => users.isFetching
);

export const selectUsersError = createSelector(
    [selectUsers],
    users => users.errorMessage
);

export const selectAreUsersLoaded = createSelector(
    [selectUsers],
    users => !!users.users
);
