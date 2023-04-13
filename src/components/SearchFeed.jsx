import { Stack, Typography,Box } from '@mui/material';
import Videos from './Videos';
import { useState,useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const[videos, setVideos] = useState([]);  

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {setVideos(data.items)})
    }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
        {searchTerm}
        <span style={{ color: "#FC1503" }}> videos</span>
      </Typography>

      <Videos video={videos} />
    </Box>
  )
}

export default SearchFeed