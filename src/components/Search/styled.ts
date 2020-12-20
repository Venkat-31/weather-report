import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    height: 3.25rem;
    border-radius: 26px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    z-index: 1;
    margin: 6.5rem auto 4rem;
    max-width: 500px;
    transition: all 0.8s ease 0.5s;
    svg{
        margin-left: 1.2rem;
        color: #4a6fa1;
    }
`;
export const SearchInput = styled.input`
    flex: 1;
    margin-left: 1rem;
    height: 3.25rem;
    border: none;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
    background-color: #FFFFFF;
    font-size: 1.125rem;
    color: #727E8E;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #6898d5;
    }
`;

export const LocationButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
    display: contents;
    &:hover svg {
    }
`;

export const SearchResult = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    width: 98%;
    left: 1%;
    top: 3.35rem;
    border-radius: 5px;
    overflow: hidden;
`;

export const SuggestionLocationItem = styled.a`
    color: #2079c9;
    text-decoration: none;
    padding: 0.6rem 1rem;
    display: block;
    text-align: left;
    border-bottom: 1px dotted #ccc;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
    }
`;
