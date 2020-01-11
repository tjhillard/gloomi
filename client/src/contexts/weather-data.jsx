import React, { createContext, useContext, useReducer } from 'react';

const initialValue = {
  isLoading: false,
  error: false,
  gloomScore: 42,
  weatherData: {},
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'FETCH_DATA_INIT':
      return { isLoading: true };
    case 'FETCH_DATA_REQUEST_SUCCESS':
      return {
        isLoading: false,
        weatherData: action.response,
        gloomScore: action.gloomScore,
      };
    case 'FETCH_DATA_REQUEST_ERROR':
      return { isLoading: false, error: true };
    default:
      return {};
  }
};

const WeatherDataContext = createContext();
const WeatherDataDispactContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <WeatherDataContext.Provider value={state}>
      <WeatherDataDispactContext.Provider value={dispatch}>
        {children}
      </WeatherDataDispactContext.Provider>
    </WeatherDataContext.Provider>
  );
};

export function useWeatherData() {
  return [
    useContext(WeatherDataContext),
    useContext(WeatherDataDispactContext),
  ];
}
