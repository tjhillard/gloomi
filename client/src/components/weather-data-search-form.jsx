import React, { useState } from 'react';
import { useWeatherData } from '../contexts/weather-data';
import { fetchWeatherData } from '../api/fetch-weather-data';
import { calculateGloomScore } from '../utils/calculate-gloom-score';

export const WeatherDataSearchForm = () => {
  const [state, dispatch] = useWeatherData();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    dispatch({ type: 'FETCH_DATA_INIT' });
    try {
      const data = await fetchWeatherData(latitude, longitude);
      const gloomScore = calculateGloomScore({
        temp: data.currently.temperature,
        precipitationIntensity: data.currently.precipIntensity,
        cloudCover: data.currently.cloudCover,
        visibility: data.currently.visibility,
      });
      dispatch({
        type: 'FETCH_DATA_REQUEST_SUCCESS',
        response: data,
        gloomScore,
      });
    } catch (err) {
      dispatch({ type: 'FETCH_DATA_REQUEST_ERROR' });
    }
  }

  return (
    <form onSubmit={handleSubmit} disabled={state.isLoading}>
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={e => setLatitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={e => setLongitude(e.target.value)}
      />
      <button type="submit">Calculate</button>
      {state.isLoading && <p>Loading...</p>}
      Gloom Score: {JSON.stringify(state.gloomScore)}
    </form>
  );
};
