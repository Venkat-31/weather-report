import styled from 'styled-components';
import FadeIn from '../instruction-message/FadeIn';

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  overflow: hidden;
  top: 20px;
  position: relative;
  opacity: 0;
  visibility: hidden;
  animation: ${FadeIn} 0.5s .75s forwards;
`;
export const SectionTitle = styled.h6`
  font-size: 1.5rem;
  color: #2F5D8A;
  margin-top: 2rem;
  font-weight: bold;
`;
export const ForecastItems = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  > :last-child {
    margin-right: 0;
  }
`;
export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  
  background-color: #FFFFFF;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  margin-right:1rem;
  min-width:10.5rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4581c5;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0.7rem 0;
  }
  p {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4a6fa1;
  }
  span {
    font-size: 1.125rem;
    color: #4a6fa1;
    width: 5rem;
    text-align: center;
  }
`;
