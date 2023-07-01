import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <a className="link" href="#home">
          <li>Home</li>
        </a>

        <a className="link" href="#movies">
          <li>Movies</li>
        </a>
        <a className="link" href="#Tv Shows">
          <li>Tv Shows</li>
        </a>
      </ul>
      <form>
        <input type="search" placeholder="Search Movies or Tv Shows" />
      </form>

      {/* <button className="Sign-Up">Sign UP</button> */}
    </nav>
  );
}

export default Nav;
