import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn hover:bg-[#97DEFF] "
        style={{ background: category.name === selectedCategory && '#3795BD', color:category.name === selectedCategory && 'white'   }}
        onClick={() => {setSelectedCategory(category.name)}}
        key={category.name}
      >
        <span >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;