import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: block;
    height: 64px;
    margin: 0;
    padding: 20px 0;
    text-transform: uppercase;
    transition: 0.3s 1.4s;
`;

export const AppTitle = styled.h1`
  color: #2F5D8A;
  font-size: 2.2rem;
  @media (max-width: 500px) {
    font-size: 1.8rem;
    line-height: 1.9rem;
  }
`;

