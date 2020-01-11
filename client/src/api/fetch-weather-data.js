import { get } from 'axios';

export async function fetchWeatherData(lat, lng) {
  const { data } = await get('/api/weather', {
    params: { latlng: `${lat},${lng}` },
  });
  return data;
}
