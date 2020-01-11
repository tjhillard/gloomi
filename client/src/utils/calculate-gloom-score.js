export function calculateGloomScore({
  temp,
  cloudCover,
  precipitationIntensity,
  visibility,
}) {
  return (
    cloudCover * 20 +
    temp * -1.5 +
    precipitationIntensity * 5 * (visibility * -1.25)
  );
}
