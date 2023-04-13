import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>


      <CardContent sx={{ backgroundColor: "#6B728E", height: '106px' }}>
        <Link to={`/video/${videoId}`} >
          <Typography variant="subtitle1" fontWeight="bold" color="#F0F0F0">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>


        <Link to={`/channel/${snippet?.channelId}`} >
          <Typography variant="subtitle2" color="#D8D8D8">
            {snippet?.channelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "#B9E9FC", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard