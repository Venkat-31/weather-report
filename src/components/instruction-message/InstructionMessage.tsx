import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { InstructionMessageRow, InstructionMessageText, InstructionMessageWrapper } from './styled';

export const InstructionMessage = () => {
    return (
        <InstructionMessageWrapper>
            <InstructionMessageRow>
                <FontAwesomeIcon icon={faInfoCircle} />
                <InstructionMessageText>Enter the location in the search box.</InstructionMessageText>
            </InstructionMessageRow>
            <InstructionMessageRow>
                <FontAwesomeIcon icon={faInfoCircle} />
                <InstructionMessageText>Select the location from dropdown list to get weather report.</InstructionMessageText>
            </InstructionMessageRow>
        </InstructionMessageWrapper>
    );
};
