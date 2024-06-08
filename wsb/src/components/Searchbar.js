import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  async function fetchRecipies() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange() {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipies();
  }, [query]);

  return (
    <TextField
      sx={{
        width: "60%",
      }}
      label="Wyszukaj przepis"
      defaultValue="chicken"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={fetchRecipies}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
