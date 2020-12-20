import * as React from 'react';
import { useDispatch } from 'react-redux';
import { IGeoCoords } from '../../common/types/commonTypes';
import { fetchWeather } from '../../store/actions/weather';
import { SuggestionLocationItem } from './styled';

interface ISuggestionLocationsProps {
    label: string;
    geoLocation: IGeoCoords;
    hideSuggestionFn: Function;
}

const SuggestionLocations: React.FC<ISuggestionLocationsProps> = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(fetchWeather(props.geoLocation));
        setTimeout(() => {
            props.hideSuggestionFn(props.label);
        }, 400);
    };

    return <SuggestionLocationItem onClick={onClick}>{props.label}</SuggestionLocationItem>;
};

export default SuggestionLocations;
