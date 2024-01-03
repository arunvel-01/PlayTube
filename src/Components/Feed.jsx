import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";

// Get the current year for the copyright notice
const currentYear = new Date().getFullYear();

const Feed = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("New");

  // State to store the fetched videos
  const [videos, setVideos] = useState([]);

  // Fetch videos based on the selected category when the component mounts
  useEffect(() => {
    // Use the FetchFromAPI utility function to make the API request
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]); // Trigger the effect whenever selectedCategory changes

  return (
    // Use MUI Stack and Box components for layout
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar component to display categories and handle category selection */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Pass props to the Sidebar component */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Copyright notice */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright &copy; {currentYear}
          Developed by Arunvel.
        </Typography>
      </Box>

      {/* Main content area for displaying videos */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        {/* Section title with selected category */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>

        {/* Videos component to render the list of videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
