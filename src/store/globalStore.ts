import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { baseReducer, IBaseState } from './reducers/baseReducer';
import { IWeatherState, weatherReducer } from './reducers/weatherReducer';

const rootReducer = combineReducers({
    base: baseReducer,
    weather: weatherReducer,
});

export type GlobalStore = {
    base: IBaseState;
    weather: IWeatherState;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
