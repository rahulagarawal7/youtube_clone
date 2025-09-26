const API_URL = import.meta.env.VITE_API_URL;
const JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

const REQUEST_TIMEOUT = 10000;

const YOUTUBE_URL="https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key="

export { API_URL, JWT_SECRET, REQUEST_TIMEOUT,YOUTUBE_URL };
