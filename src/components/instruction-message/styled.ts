import styled from 'styled-components';
import FadeIn from './FadeIn';

export const InstructionMessageWrapper = styled.div`
    max-width: 600px;
    display: flex;
    margin: 100px auto 0;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    position: relative;
    border-radius: 10px;
    top: 20px;
    background-color: rgba(255,255,255,0.75);
    border-radius: 10px;
    animation: ${FadeIn} 0.5s .75s forwards;
    flex-direction: column;
`;

export const InstructionMessageRow = styled.span`
    display: block;
    color: #4581c5;
    margin:0 0 1rem 0;
    :last-child{
        margin-bottom:0;
    }
    svg{
        width: 1.1rem !important;
        height: 1.1rem;
        vertical-align: middle;
        margin-right: 0.35rem;
    }
`;

export const InstructionMessageText = styled.span`
    color: #4581c5;
    font-size: 1.1rem;
    line-height:1rem;
    vertical-align: middle;
`;
