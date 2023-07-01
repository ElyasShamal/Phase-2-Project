import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>Tv Shows</li>
      </ul>
      <form>
        <input type="search" placeholder="Search Movies or Tv Shows" />
      </form>
    </nav>
  );
}

export default Nav;
