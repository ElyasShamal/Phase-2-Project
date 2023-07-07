import React, { useState, useEffect, useRef } from "react";
import starRating from "./Rating";
import { AiFillHeart } from "react-icons/ai";
import Player from "./Player";

function Movie() {
  const [movies, setMovies] = useState([]);
  const movieRef = useRef(null);

  useEffect(() => {
    const fetchMovie = () =>
      fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Movies"
      ).then((response) => response.json());

    async function startFetching() {
      const moviesData = await fetchMovie();

      setMovies(moviesData);
    }
    startFetching();
  }, []);

  const handleLikes = () => {
    return;
  };

  const handlePlay = () => {
    movieRef.current.showModal();
  };

  const handleClose = () => {
    movieRef.current.close();
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
          <button className="playBtn" onClick={handlePlay}>
            Play
          </button>
          <dialog ref={movieRef} className="movie-ref">
            <button onClick={handleClose}>X</button>
            <Player youtubeId={movie.youtubeId} />
          </dialog>
        </div>
      ))}
    </>
  );
}

export default Movie;
