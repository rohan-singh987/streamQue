import { Box } from "@mui/material"
import { Routes ,Route } from "react-router-dom"
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from "./components/Navbar";


const App = () => {
  return (
      <>


        <Box className="bg-[url(././assets/bgg.png)] bg-center bg-no-repeat bg-cover">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
      </>
  )
}

export default App