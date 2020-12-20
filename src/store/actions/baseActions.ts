import { BaseActionTypes } from '../actionTypes';

export const changeDegreeType = () => ({
    type: BaseActionTypes.TemperatureUnit,
    payload: {},
});

export const setLoading = () => ({
    type: BaseActionTypes.SetLoading,
    payload: true,
});

export const setReady = () => ({
  type: BaseActionTypes.SetLoading,
  payload: false,
});

export const setIsInitialState = (state: boolean) => ({
    type: BaseActionTypes.SET_IS_INITIAL,
    payload: state,
});

