import { faArrowDown, faArrowUp, faTachometerAlt, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TempUnit } from '../../common/types/commonTypes';
import { changeDegreeType } from '../../store/actions/baseActions';
import { GlobalStore } from '../../store/globalStore';
import { kMToMile } from '../../utils/utils';
import { ErrorMessage } from '../error-message/ErrorMessage';
import { InstructionMessage } from '../instruction-message/InstructionMessage';
import { Loader } from '../loaders/Loader';
import UnitToggleSwitch from '../UnitToggle/UnitToggleSwitch';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {
    CurrentWeather,
    CurrentWeatherContainer,
    CurrentWeatherInfo,
    FeelsLike,
    HighLowContainer,
    InfoGroup,
    InfoRow,
    SectionTitle,
    WeatherContainer,
    WeatherDegree
} from './styled';
import Temperature from './Temperature';

const Weather: React.FC = () => {
    const { weather, degreeType, isInitial, isError, isLoading } = useSelector((store: GlobalStore) => ({
        weather: store.weather.weatherData,
        degreeType: store.base.temperatureUnit,
        isInitial: store.base.isInitial,
        isError: store.weather.isError,
        isLoading: store.base.isLoading,
    }));
    const dispatch = useDispatch();

    const weatherBlock = () => {
        return (
            <WeatherContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <SectionTitle>Current Weather</SectionTitle>
                    <div>
                        <UnitToggleSwitch onClick={() => dispatch(changeDegreeType())} />
                    </div>
                </div>
                <CurrentWeatherContainer>
                    <CurrentWeather>
                        <h4>{weather.name}</h4>
                        <div style={{ display: 'flex' }}>
                            <WeatherIcon code={weather.weather.id} big />
                            <span>
                                <Temperature value={weather.main.temp} />
                                <sup>&deg;</sup>
                            </span>
                        </div>
                        <h6>{weather.weather.description}</h6>
                    </CurrentWeather>

                    <CurrentWeatherInfo>
                        <FeelsLike>
                            Feels like <Temperature value={weather.main.feels_like} />
                            <sup>&deg;</sup>
                        </FeelsLike>
                        <HighLowContainer>
                            <WeatherDegree>
                                <FontAwesomeIcon icon={faArrowUp} size='lg' />
                                <Temperature value={weather.main.temp_max} />
                                <sup>&deg;</sup>
                            </WeatherDegree>
                            <WeatherDegree>
                                <FontAwesomeIcon icon={faArrowDown} size='lg' />
                                <Temperature value={weather.main.temp_min} />
                                <sup>&deg;</sup>
                            </WeatherDegree>
                        </HighLowContainer>
                        <InfoGroup>
                            <InfoRow>
                                <div>
                                    <FontAwesomeIcon icon={faTint} size='lg' />
                                    Humidity
                                </div>
                                <span>{weather.main.humidity}%</span>
                            </InfoRow>
                            <InfoRow>
                                <div>
                                    <FontAwesomeIcon icon={faWind} size='lg' />
                                    Wind
                                </div>
                                <span>
                                    {degreeType === TempUnit.CELCIUS ? weather.wind.speed : kMToMile(weather.wind.speed)}
                                    {degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
                                </span>
                            </InfoRow>
                            <InfoRow>
                                <div>
                                    <FontAwesomeIcon icon={faTachometerAlt} size='lg' />
                                    Pressure
                                </div>
                                <span>{weather.main.pressure}hPa</span>
                            </InfoRow>
                        </InfoGroup>
                    </CurrentWeatherInfo>
                </CurrentWeatherContainer>
            </WeatherContainer>
        );
    };

    switch (true) {
        case isInitial:
            return <InstructionMessage />;
        case isLoading:
            return <Loader />;
        case isError:
            return <ErrorMessage />;
        default:
            return weatherBlock();
    }
};

export default Weather;
