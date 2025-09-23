
export const generateRandomViews = (min = 100, max = 1000000) => {
  // Generate a random number between min and max
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  // Format number (e.g. 1200 → "1.2K", 500000 → "500K", 1200000 → "1.2M")
  if (random >= 1000000) {
    return (random / 1000000).toFixed(1) + "M";
  } else if (random >= 1000) {
    return (random / 1000).toFixed(1) + "K";
  }
  return random.toString();
};
