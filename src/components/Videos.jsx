import React from 'react'
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({video}) => {
  return (
        <Stack direction={"direction" || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {video.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos