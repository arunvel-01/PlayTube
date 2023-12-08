import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar,VideoDetail,searchFeed,Feed,ChannelDetail} from './Components';

export const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/vedio/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<searchFeed />} />
        </Routes>
    </Box>
  </BrowserRouter>

);

export default App;
