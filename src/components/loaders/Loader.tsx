import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LoaderIcon, LoaderWrapper } from './styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderIcon>
                <FontAwesomeIcon icon={faSpinner} pulse size="2x"/>
            </LoaderIcon>
        </LoaderWrapper>
    );
};
