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
    <div>
      <img src={movies[0]?.image} alt={movies[1]?.title} />
      <h1 style={{ color: "white" }}>{movies[1]?.title}</h1>
    </div>
  );
}

export default Movie;
