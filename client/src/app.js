import React from 'react';
import './app.css';
import { WeatherDataProvider } from './contexts/weather-data';
import { WeatherDataSearchForm } from './components/weather-data-search-form';

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <img
          src="https://media2.giphy.com/media/EEFEyXLO9E0YE/giphy.gif?cid=790b7611f01eac2f6e9df708bad47c011b28345d12473783&rid=giphy.gif"
          alt="Rainingn Cloud"
          height="100px"
          width="100px"
        />
        <h1>Gloomi</h1>
        <WeatherDataSearchForm />
      </div>
    </WeatherDataProvider>
  );
}

export default App;
