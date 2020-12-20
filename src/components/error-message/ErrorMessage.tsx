import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ErrorMessageIcon, ErrorMessageText, ErrorMessageWrapper } from './styled';

export const ErrorMessage = () => {
    return (
        <ErrorMessageWrapper>
            <ErrorMessageIcon>
                <FontAwesomeIcon icon={faFrown} />
            </ErrorMessageIcon>
            <ErrorMessageText>Sorry, the specified city was not found..</ErrorMessageText>
        </ErrorMessageWrapper>
    );
};
