import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

// SearchBar component for handling user input and search functionality
const SearchBar = () => {
  // State to manage the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  
  // React Router's useNavigate hook to navigate to search results
  const navigate = useNavigate();

  // Function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault();
    // If there is a search term, navigate to the search results page
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      // Clear the search term after navigation
      setSearchTerm("");
    }
  };

  return (
    // Material-UI Paper component to create a styled form container
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      {/* Input field for the user to enter the search term */}
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* IconButton for triggering the search */}
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;