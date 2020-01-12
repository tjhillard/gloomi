export function calculateGloomScore({
  temp, // smaller the gloomier
  cloudCover, // 0-1 percentage of sky covered in clouds (higher the gloomier)
  precipitationIntensity, // rainfall amount (higher the gloomier)
  visibility, // 0-10 miles (lower the gloomier)
}) {
  const cloudCoverScore = cloudCover * 100;
  const precipitationIntensityScore = precipitationIntensity * 50;
  const visibilityScore = (10 - visibility) * 5;
  const tempScore = temp < 55 ? 20 : 0;
  return (
    cloudCoverScore +
    precipitationIntensityScore +
    visibilityScore +
    tempScore
  ).toFixed(2);
}
