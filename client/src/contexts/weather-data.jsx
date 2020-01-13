import React, { createContext, useContext, useReducer } from 'react';

const initialValue = {
  isLoading: false,
  error: false,
  errorMessage: null,
  gloomScore: null,
  weatherData: {},
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'FETCH_DATA_INIT':
      return { ...initialValue, isLoading: true };
    case 'FETCH_DATA_REQUEST_SUCCESS':
      return {
        isLoading: false,
        weatherData: action.response,
        gloomScore: action.gloomScore,
      };
    case 'FETCH_DATA_REQUEST_ERROR':
      return {
        ...initialValue,
        isLoading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      return {};
  }
};

const WeatherDataContext = createContext();
const WeatherDataDispatchContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <WeatherDataContext.Provider value={state}>
      <WeatherDataDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDataDispatchContext.Provider>
    </WeatherDataContext.Provider>
  );
};

export function useWeatherData() {
  return [
    useContext(WeatherDataContext),
    useContext(WeatherDataDispatchContext),
  ];
}
