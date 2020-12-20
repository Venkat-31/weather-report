import React from 'react';
import Forecast from '../components/Forecast/Forecast';
import SearchBar from '../components/Search/SearchBar';
import Weather from '../components/Weather/Weather';

const WeatherReport: React.FC = () => {
    return (
        <>
            <SearchBar />
            <Weather />
            <Forecast />
        </>
    );
};

export default WeatherReport;
