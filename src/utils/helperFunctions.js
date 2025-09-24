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

export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num?.toString();
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


// Debounce function
export function debounce(func, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
