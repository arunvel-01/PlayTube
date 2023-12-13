import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../Utils/Constants";
import SeacrhBar from "./SearchBar"; // Assuming there's a typo in "SeacrhBar" and it should be "SearchBar"

// Navbar component that includes a logo and a search bar
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    {/* Link to the home page with a logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    {/* SearchBar component for user input */}
    <SeacrhBar />
  </Stack>
);

export default Navbar;
