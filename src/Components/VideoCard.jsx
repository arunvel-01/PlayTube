import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../Utils/Constants";

// VideoCard component displays a card with video information
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    // Material-UI Card component for styling
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "285px" },
        boxShadow: "none",
        borderRadius: "0",
        margin: "7px",
      }}
    >
      {/* Link to the video detail page */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* CardMedia for displaying the video thumbnail */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      {/* CardContent for displaying video details */}
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        {/* Link to the video detail page */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* Typography for displaying the video title */}
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* Link to the channel page */}
        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
        >
          {/* Typography for displaying the channel details */}
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            {/* CheckCircle icon for indicating verified status */}
            <CheckCircle sx={{ fontSize: "12", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
