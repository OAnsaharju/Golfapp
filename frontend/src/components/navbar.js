import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Poikainpelit</h1>
        <p>Official Golf App for Poikainpelit </p>
      </div>
      <div className="navbar-links">
        <a href="/">HOME</a>
        <a href="/stats">STATISTICS</a>
        <a href="/#">CONTENT</a>
      </div>
    </div>
  );
};

export default Navbar;
