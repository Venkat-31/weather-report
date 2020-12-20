import { fetchFullWeatherData, fetchWeatherData } from '../../common/api/weather';
import { IExtendedForecastData, IGeoCoords, IWeatherData } from '../../common/types/commonTypes';
import { getNextSevenDays, kelvinToCelcius } from '../../utils/utils';
import { WeatherActionTypes } from '../actionTypes';
import { setIsInitialState, setLoading, setReady } from './baseActions';

export const fetchWeatherStart = () => ({
    type: WeatherActionTypes.FetchWeatherStart,
});

export const fetchWeatherSuccess = (weather: IWeatherData, forecast: IExtendedForecastData[]) => ({
    type: WeatherActionTypes.FetchWeatherSuccess,
    payload: { weather, forecast },
});

export const fetchWeatherFail = (error: any) => ({
    type: WeatherActionTypes.FetchWeatherError,
    payload: error,
});

export const fetchWeather = (city: IGeoCoords) => {
    return (dispatch: any) => {
        dispatch(setLoading());
        dispatch(fetchWeatherStart());

        Promise.all([fetchWeatherData(city), fetchFullWeatherData(city)])
            .then((res) => {
                return Promise.all([res[0].json(), res[1].json()]);
            })
            .then((res) => {
                const { forecast, weather } = transformWeatherData(res);
                dispatch(fetchWeatherSuccess(weather, forecast));
                dispatch(setIsInitialState(false));
                dispatch(setReady());
            })
            .catch((err) => {
                console.log('e', err);

                dispatch(fetchWeatherFail(err));
                dispatch(setReady());
            });
    };
};

const transformWeatherData = (
    res: any
): {
    weather: IWeatherData;
    forecast: IExtendedForecastData[];
} => {
    const weather = res[0] as IWeatherData;
    const forecast: IExtendedForecastData[] = [];

    weather.weather = res[0].weather[0];
    weather.main = {
        ...weather.main,
        temp: kelvinToCelcius(weather.main.temp),
        feels_like: kelvinToCelcius(weather.main.feels_like),
        temp_max: kelvinToCelcius(weather.main.temp_max),
        temp_min: kelvinToCelcius(weather.main.temp_min),
    };
    weather.wind.speed = Math.round(weather.wind.speed * 3.6);

    const next7Days = getNextSevenDays();

    res[1].daily.forEach((i: any, index: number) => {
        if (index === 0) {
            return;
        }
        forecast.push({
            day: next7Days[index - 1],
            temp: {
                temp_max: kelvinToCelcius(i.temp.max),
                temp_min: kelvinToCelcius(i.temp.min),
            },
            wind: i.wind_speed,
            weather: {
                id: i.weather[0].id,
                main: i.weather[0].main,
            },
        });
    });

    return {
        weather,
        forecast,
    };
};
