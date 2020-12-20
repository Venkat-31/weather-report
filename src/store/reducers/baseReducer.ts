import { TempUnit } from "../../common/types/commonTypes";
import { BaseActionTypes } from "../actionTypes";

export interface IBaseState {
  isLoading: boolean;
  isInitial: boolean;
  temperatureUnit: TempUnit;
}

const initialState: IBaseState = {
  isLoading: false,
  isInitial: true,
  temperatureUnit: TempUnit.CELCIUS,
};

export const baseReducer = (state: IBaseState = initialState, action: { type: BaseActionTypes; payload: any }) => {

  switch (action.type) {
    case BaseActionTypes.TemperatureUnit:
      return {
        ...state,
        temperatureUnit: state.temperatureUnit === TempUnit.CELCIUS ? TempUnit.FAHRENHEIT : TempUnit.CELCIUS,
      };
    case BaseActionTypes.SetLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case BaseActionTypes.SET_IS_INITIAL:
      return {
        ...state,
        isInitial: action.payload,
      };
    default:
      return state;
  }
};
