import React from 'react';
import './app.css';
import Logo from './gloomi.gif';
import { WeatherDataProvider } from './contexts/weather-data';
import { WeatherDataSearchForm } from './components/weather-data-search-form';

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <img src={Logo} alt="Raining Cloud" height="125px" width="125px" />
        <h1>Gloomi</h1>
        <p>Quantifies gloominess based on current weather conditions.</p>
        <WeatherDataSearchForm />
      </div>
    </WeatherDataProvider>
  );
}

export default App;
