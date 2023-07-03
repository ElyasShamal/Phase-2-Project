import React, { useState, useEffect } from "react";

function Movie({ moviesData }) {
  const
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
    <div className="Data-app">
      <img src={movies[0]?.image} alt={movies[1]?.title} />
      <h1 style={{ color: "white" }}>{movies[1]?.title}</h1>
    </div>
  );
}

export default Movie;
