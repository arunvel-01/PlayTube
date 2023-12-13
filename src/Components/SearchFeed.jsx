import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";
import { useParams } from "react-router-dom";

// SearchFeed component displays search results based on the search term
const SearchFeed = () => {
  // State to manage the fetched videos and potential error
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  // Extract the search term from the route parameters
  const { searchTerm } = useParams();

  // Effect to fetch data based on the search term when the component mounts or searchTerm changes
  useEffect(() => {
    // Fetch videos based on the search term
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => setError(error));
  }, [searchTerm]);

  // If an error occurs during fetching, display an error message
  if (error) {
    return (
      <Box p={2}>
        <Typography variant="h6" color="error">
          Error fetching data: {error.message}
        </Typography>
      </Box>
    );
  }

  // Display the search results if there are no errors
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#F31503" }}> {searchTerm} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
