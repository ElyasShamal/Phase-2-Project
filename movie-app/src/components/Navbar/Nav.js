import React, { useRef } from "react";

function Nav() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Movies", link: "#movies" },
    { name: "TV Shows", link: "#tv-shows" },
  ];

  const dialogRef = useRef(null);

  const handleDialog = () => {
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);

    fetch("http://localhost:3333/Movies", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  };
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
        <input
          className="search"
          type="search"
          placeholder="Search Movies or TV Shows"
        />
      </form>
      <button className="add-movie" onClick={handleDialog}>
        Add Movie
      </button>
      <dialog ref={dialogRef} className="post-dialog">
        <button className="close" onClick={handleClose}>
          X
        </button>
        <form id="form" onSubmit={onSubmit}>
          <label>Image</label>
          <input name="image" placeholder="image Url"></input>
          <label>
            Name
            <input name="title" placeholder="Movie Name"></input>
          </label>

          <label>Rate</label>
          <select name="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <button className="submit" onClick={handleClose}>
            Submit
          </button>
        </form>
      </dialog>
    </nav>
  );
}

export default Nav;
