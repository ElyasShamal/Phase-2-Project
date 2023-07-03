import React, { useState, useEffect } from "react";

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
          <h1>{movie.title}</h1>
          <span>{movie.rating}</span>
        </div>
      ))}
    </>
  );
}

export default Movie;
