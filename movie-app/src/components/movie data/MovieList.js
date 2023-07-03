import React from "react";
import Movie from "./Movie";

function MovieList({ movieDatas }) {
  const movieList = movieDatas.map((movieData) => (
    <Movie movieData={movieData} />
  ));
  return (
    <div className="collection">
      <h1>WHAT'S HOT</h1>
      {movieList}
    </div>
  );
}

export default MovieList;
