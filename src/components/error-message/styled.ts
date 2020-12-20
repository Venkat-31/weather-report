import styled from 'styled-components';
import FadeIn from '../instruction-message/FadeIn';

export const ErrorMessageWrapper = styled.div`
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto 0;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    position: relative;
    border-radius: 10px;
    top: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    animation: ${FadeIn} 0.5s .75s forwards;
`;

export const ErrorMessageIcon = styled.span`
    display: block;
    text-align: center;
    color: #4581c5;
    font-size: 40px;
    margin-right: 10px;
`;

export const ErrorMessageText = styled.span`
    color: #4581c5;
    font-size: 17px;
`;
