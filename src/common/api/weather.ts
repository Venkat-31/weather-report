import { config } from '../config';
import { IGeoCoords } from '../types/commonTypes';

export const fetchWeatherData = (city: IGeoCoords) => {
    const url = `${config.weatherUrl}?lat=${city.lat}&lon=${city.lng}&appid=${config.weatherAPIKey}`;
    return fetch(url);
};

export const fetchExtendedForecastData = (city: IGeoCoords) => {
    const url = `${config.forecastUrl}?lat=${city.lat}&lon=${city.lng}&appid=${config.weatherAPIKey}`;
    return fetch(url);
};

export const fetchFullWeatherData = (city: IGeoCoords) => {
    const url = `${config.onCallUrl}?lat=${city.lat}&lon=${city.lng}&appid=${config.weatherAPIKey}`;
    return fetch(url);
};
