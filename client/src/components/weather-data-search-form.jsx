import React, { useState } from 'react';
import { useWeatherData } from '../contexts/weather-data';
import { fetchWeatherData } from '../api/fetch-weather-data';
import { calculateGloomScore } from '../utils/calculate-gloom-score';
import { getUserCoordinates } from '../utils/get-user-coordinates';
import { Button } from './button';
import { GloomScoreResults } from './gloom-score-results';

export const WeatherDataSearchForm = () => {
  const [state, dispatch] = useWeatherData();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const isLoading = state.isLoading || isLoadingLocation;

  async function calculate() {
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
      alert(
        'There was an error calculating the gloom score for the provided coordinates.'
      );
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    calculate();
  }

  async function useUserLocation() {
    setIsLoadingLocation(true);
    try {
      const {
        coords: { latitude, longitude },
      } = await getUserCoordinates();
      setLatitude(latitude);
      setLongitude(longitude);
    } catch (err) {
      alert('There was an error finding your location.');
    } finally {
      setIsLoadingLocation(false);
    }
  }

  function handleRecommendationSelected(lat, lng) {
    setLatitude(lat);
    setLongitude(lng);
  }

  return (
    <form onSubmit={handleFormSubmit} disabled={state.isLoading}>
      <div className="recommendations">
        <a onClick={() => handleRecommendationSelected(47.602, -122.3321)}>
          Seattle
        </a>
        <a onClick={() => handleRecommendationSelected(25.033, 121.5654)}>
          Taipei
        </a>
        <a onClick={() => handleRecommendationSelected(51.5074, -0.1278)}>
          London
        </a>
        <a onClick={() => handleRecommendationSelected(64.1466, -21.9426)}>
          Reykjavik
        </a>
      </div>

      <div className="inputs">
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
      </div>
      <Button
        isLoading={isLoading}
        className="location-btn"
        type="button"
        onClick={useUserLocation}
      >
        🌎 Use My Location
      </Button>
      <Button isLoading={isLoading} className="calculate-btn" type="submit">
        🌧 Calculate
      </Button>

      <GloomScoreResults
        latitude={state.weatherData.latitude}
        longitude={state.weatherData.longitude}
        gloomScore={state.gloomScore}
      />
    </form>
  );
};
