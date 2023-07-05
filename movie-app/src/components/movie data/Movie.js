import React, { useState, useEffect } from "react";
import starRating from "./Rating";
import { AiFillHeart } from "react-icons/ai";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = () =>
      fetch("http://localhost:3333/Movies").then((response) => response.json());

    async function startFetching() {
      const moviesData = await fetchMovie();
      console.log(moviesData);

      setMovies(moviesData);
    }
    startFetching();
  }, []);

  const handleLikes = () => {
    return;
  };

  return (
    <>
      {movies.map((movie) => (
        <div className="collection" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <span style={{ color: "white" }}>
            <AiFillHeart onClick={handleLikes} style={{ color: "red" }} />
            {movie.likes}
          </span>
          <span style={{ color: "orange" }}> {starRating(movie.rating)} </span>
          <button className="playBtn">Play</button>
        </div>
      ))}
    </>
  );
}

export default Movie;
