import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  // Check if videos are still loading
  if (!videos?.length) return "Loading";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap="2"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* Check if the item is a video with an ID */}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
