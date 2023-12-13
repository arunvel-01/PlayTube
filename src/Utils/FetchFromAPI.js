import axios from "axios";

// Base URL for the YouTube API
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// Options object with parameters and headers for the API request
const options = {
  params: {
    maxResults: 50, // Specify the maximum number of results
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY, // API key for authentication
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com", // Host for the RapidAPI service
  },
};

// Function to fetch data from the YouTube API
export const FetchFromAPI = async (url) => {
  try {
    // Make a GET request to the specified URL with options
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    throw error; // Throw an error if the API request fails
  }
};
