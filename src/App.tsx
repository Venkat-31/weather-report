import React from 'react';
import { GlobalStyles } from './app.styled';
import Header from './components/Header/Header';
import WeatherReport from './pages/WeatherReport';

const App: React.FC = (_: {}) => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <WeatherReport />
        </div>
    );
};

export default App;
