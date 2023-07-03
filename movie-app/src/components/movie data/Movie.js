import React, { useState, useEffect } from "react";
import starRating from "./Rating";
import AiFillEye from "./AiFillEye";
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

  return (
    <>
      {movies.map((movie) => (
        <div className="collection" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>

          <span style={{ color: "white" }}>
            <AiFillHeart /> {movie.likes}
          </span>
          <span style={{ color: "orange" }}>
            <AiFillEye />
            {movie.views}
          </span>
          <p style={{ color: "orange" }}> {starRating(movie.rating)} </p>
        </div>
      ))}
    </>
  );
}

export default Movie;
