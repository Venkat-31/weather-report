import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { fetchCities } from '../../common/api/fetchCities';
import { CityItem } from '../../common/types/commonTypes';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchContainer, SearchInput, SearchResult } from './styled';
import SuggestionLocations from './SuggestionLocations';

const SearchBar: React.FC = () => {
    const suggestionRef = useRef(null);
    const [suggestions, setSuggestions] = useState<CityItem[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    const isExists = suggestions.find((i) => i.label === searchTerm);
    
    useEffect(() => {
        if (!searchTerm || isExists) {
            return;
        }

        setShowSuggestions(true);
        fetchCities(searchTerm).then((res) => {
            setSuggestions(res);
        });
    }, [searchTerm, isExists]);

    useClickOutside(suggestionRef, () => setShowSuggestions(false));

    const onSearchInputChanged = (e: any) => {
        setSearchTerm(e.target.value);
    };

    return (
        <SearchContainer>
            <FontAwesomeIcon icon={faSearch} size='lg' />
            <DebounceInput
                element={SearchInput}
                debounceTimeout={300}
                onChange={onSearchInputChanged}
                placeholder='Search for location'
                value={searchTerm}
            />
            {showSuggestions && (
                <SearchResult ref={suggestionRef}>
                    {suggestions?.slice(0, 6)?.map((s, i) => (
                        <SuggestionLocations
                            key={i}
                            label={s.label}
                            geoLocation={s.geoLocation}
                            hideSuggestionFn={(selectVal: string) => {
                                selectVal && setSearchTerm(selectVal);
                                setShowSuggestions(false);
                            }}
                        />
                    ))}
                </SearchResult>
            )}
        </SearchContainer>
    );
};

export default SearchBar;
