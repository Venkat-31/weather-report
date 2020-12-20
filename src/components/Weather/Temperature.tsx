import React from 'react';
import { useSelector } from 'react-redux';
import { TempUnit } from '../../common/types/commonTypes';
import { GlobalStore } from '../../store/globalStore';
import { celciusToFahrenheit } from '../../utils/utils';

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  const { degreeType } = useSelector((state: GlobalStore) => ({
    degreeType: state.base.temperatureUnit,
  }));

  if (degreeType === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;
