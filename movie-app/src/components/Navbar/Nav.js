import React from "react";

function Nav() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Movies", link: "#movies" },
    { name: "TV Shows", link: "#tv-shows" },
  ];
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item, index) => (
          <a key={index} className="link" href={item.link}>
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
      <form>
        <input type="search" placeholder="Search Movies or TV Shows" />
      </form>
    </nav>
  );
}

export default Nav;
