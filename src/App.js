import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, VideoDetail, Feed, SearchFeed } from "./Components";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

export const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Box>
  </BrowserRouter>
);


export default App;
