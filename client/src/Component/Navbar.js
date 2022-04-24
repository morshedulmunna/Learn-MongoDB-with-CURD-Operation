import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link style={{ marginRight: "20px" }} to="/">
        Home
      </Link>
      <Link to="/user">User Added</Link>
    </div>
  );
};

export default Navbar;
