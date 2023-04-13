import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";


const Navbar = () => (
  <Stack  sx={{ flexDirection: { sx: "column", md: "row" }, position:  "sticky", zIndex:10 , background: '#000', top: 0, justifyContent: "space-between" }} p={2}>
    <Link to="/" className="flex items-center">
        <span className="text-[#19A7CE] font-bold text-4xl">
            Stream
            <span className="text-white">Que</span>
        </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;