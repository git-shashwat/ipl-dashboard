import { createSelector } from 'reselect';

export const selectWeather = state => state.weather;

export const selectWeatherLocation = createSelector(
    [selectWeather],
    weather => !!weather.location ? weather.location : ''
);

export const selectIsFetchingLocation = createSelector(
    [selectWeather],
    weather => weather.isFetchingLocation
);

export const selectWeatherData = createSelector(
    [selectWeather],
    weather => weather.weather
);

export const selectIsFetchingWeather = createSelector(
    [selectWeather],
    weather => weather.isFetchingWeather
);

export const selectWeatherError = createSelector(
    [selectWeather],
    weather => weather.errorMessage
);

export const selectIsWeatherLoaded = createSelector(
    [selectWeather],
    weather => !!weather.location && !!weather.weather
);