import { useCallback, useEffect, useState } from "react";
import { defaultVideo, filterButtons } from "../utils/dummyData";
import { YOUTUBE_URL } from "../services/constant";
const API_KEY = import.meta.env.VITE_API_YOU_TUBE_KEY;

export const useGenerateText = () => {
  const [data, setData] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);


  // Fetch YouTube videos
  useEffect(() => {
    fetch(
      `${YOUTUBE_URL}${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data.items || []);
        setLoadingInfo(false);
      })
      .catch(err => {
        console.error(err);
        setData([]); // 
        setLoadingInfo(false);
      });
  }, []);

  // Function to get one random video
  const getRandomVideo = useCallback(() => {
    if (data.length === 0) return defaultVideo; // return default if no data

    const randomCategory =
      filterButtons[Math.floor(Math.random() * filterButtons.length)]?.label || "Live";

    const randomIndex = Math.floor(Math.random() * data.length);
    const video = data[randomIndex];

    // Shorten description to 100 words
    const shortDesc =
      video.snippet.description
        ?.split(" ")
        .slice(0, 100)
        .join(" ") + " ...";

    return {
      title: video.snippet.title,
      description: shortDesc,
      thumbnailUrl:
        video.snippet.thumbnails?.standard?.url ||
        video.snippet.thumbnails?.high?.url ||
        video.snippet.thumbnails?.default?.url,
      videoID: video.id,
      category: randomCategory,
    };
  }, [data]);

  // Return loadingInfo state + random video function
  return { getRandomVideo, loadingInfo };
};
