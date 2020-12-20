export enum BaseActionTypes {
  TemperatureUnit = 'TemperatureUnit',
  SetLoading = 'SetLoading',
  SetError = 'SetError',
  SET_IS_INITIAL = 'SET_IS_INITIAL',
}

export enum WeatherActionTypes {
  FetchWeatherStart = 'FetchWeatherStart',
  FetchWeatherReady = 'FetchWeatherReady',
  FetchWeatherSuccess = 'FetchWeatherSuccess',
  FetchWeatherError = 'FetchWeatherError',
}
