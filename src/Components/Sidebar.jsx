import { Stack } from "@mui/material";
import { categories } from "../Utils/Constants";

// Sidebar component displays a list of categories as buttons
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* Map through each category and create a button for it */}
    {categories.map((category) => (
      <button
        className="category-btn"
        // Set the selected category when the button is clicked
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "FC1503",
          color: "white",
        }}
        key={category.name}
      >
        {/* Display the category icon */}
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        {/* Display the category name */}
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
