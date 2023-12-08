import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";


const currentYear = new Date().getFullYear();

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright &copy; {currentYear}
        </Typography>
      </Box>
      <Box p={2} sx={{overflowy: 'auto', height: '90vh', flex: '2'}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
