import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStore } from '../../store/globalStore';
import ForecastItem from './ForecastItem';
import { ForecastContainer, ForecastItems, SectionTitle } from './styled';

const Forecast: React.FC = () => {
  const { forecast, isInitial } = useSelector((state: GlobalStore) => ({
    loading: state.base.isLoading,
    isInitial: state.base.isInitial,
    forecast: state.weather.extendedWeatherData,
  }));

  if (isInitial) return <></>;

  return (
    <ForecastContainer>
      <SectionTitle>Forecast</SectionTitle>
      <ForecastItems>
        {forecast.map((item, i) => {
          return (
            <ForecastItem
              key={i}
              day={item.day}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
          );
        })}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;
