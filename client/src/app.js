import React from 'react';
import './app.css';
import Logo from './gloomi.gif';
import { WeatherDataProvider } from './contexts/weather-data';
import { WeatherDataSearchForm } from './components/weather-data-search-form';

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <img src={Logo} alt="Rainingn Cloud" height="125px" width="125px" />
        <h1>Gloomi</h1>
        <WeatherDataSearchForm />
      </div>
    </WeatherDataProvider>
  );
}

export default App;
