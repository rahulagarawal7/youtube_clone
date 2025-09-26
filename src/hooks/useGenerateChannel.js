import React from "react";
import { dummyChannelList } from "../utils/dummyData";
import { useCallback, useEffect, useState } from "react";

export const useGenerateChannel = () => {
  const [data, setData] = useState([]);

  // Load dummyChannelList into state
  useEffect(() => {
    if (dummyChannelList && dummyChannelList.length > 0) {
      setData(dummyChannelList);
    }
  }, []);

  // Function to get one random channel
  const getRandomChannel = useCallback(() => {
    if (data.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }, [data]);

  // Return data state + random video function
  return {  getRandomChannel };
};
