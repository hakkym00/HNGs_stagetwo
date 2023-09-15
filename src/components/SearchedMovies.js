import React from "react";
import { Link } from "react-router-dom";

function SearchedMovies({ movie }) {
  return (
    <div className="serachedMovies">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt="Poster"
          width={50}
          height={50}
        />
      </Link>
      <div className="searchedMovieInfo">
        <Link to={`/movies/${movie.id}`}>
          <p> {movie?.title} </p>
        </Link>
        <p> {movie?.release_date} </p>
      </div>
    </div>
  );
}

export default SearchedMovies;
