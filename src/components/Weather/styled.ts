import styled from 'styled-components';
import FadeIn from '../instruction-message/FadeIn';

export const WeatherContainer = styled.div`
  background-color: #FFFFFF;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  top: 20px;
  position: relative;
  opacity: 0;
  visibility: hidden;
  animation: ${FadeIn} 0.5s .75s forwards;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: #727E8E;
`;
export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
    text-align: center;
  }
`;
export const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1.5rem;
  width: 20rem;

  @media (max-width: 800px) {
    margin: 2rem 0rem;
    width: auto;
  }

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    color: #396bae;
    margin-bottom: 2rem;
  }
  svg{
    @media (max-width: 500px) {
      width: 80px !important;
      height: 80px !important;
    }
  }
  span {
    font-weight: 200;
    font-size: 7rem;
    color: #4a6fa1;
    margin-left: 1.5rem;
    line-height: 1;
    @media (max-width: 500px) {
      font-size: 5rem;
    }
    sup {
      line-height: 0;
    }
  }
  h6 {
    font-size: 1.375rem;
    text-align: left;
    color: #7b98b2;

    @media (max-width: 800px) {
      text-align: center;
    }
  }
`;
export const CurrentWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1.5rem;
  @media (max-width: 800px) {
    margin: 0rem;
  }
`;
export const FeelsLike = styled.p`
  font-size: 1.25rem;
  color: #4a6fa1;
`;
export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 2rem;
  @media (max-width: 800px) {
    width:100%;
    justify-content: center;
  }
`;
export const WeatherDegree = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
  color: #3a86ca;
  margin-top: 0.8rem;
  margin-right: 2.5rem;
  @media (max-width: 800px) {
    :last-child{
      margin-right: 0rem;
    }
  }
  svg {
    fill: #A1B9CE;
    margin-right: 1rem;
  }
`;
export const InfoGroup = styled.div`
  display: flex;
  align-content: space-evenly;
  flex-direction: row;
  width: 100%;
  @media (max-width: 800px) {
    flex-flow: wrap;
    justify-content: center;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  flex-direction: column;
  width: 12rem;
  border: 1px solid #4581c5;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  :last-child{
    margin-right: 0rem;
    @media (max-width: 800px) {
      margin-right: 0.35rem;
    }
  }
  @media (max-width: 800px) {
    width: 10rem;
    margin-left:0.35rem;
    margin-right:0.35rem;
  }
  div {
    color: #7B98B2;
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: 8rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  svg {
    fill: #A1B9CE;
    margin-right: 0.5rem;
    width: 1rem;
  }
  span {
    color: #3080c8;
    font-weight: 500;
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size:1.5rem;
    }
  }
`;
