import React from "react";
import tomato from "../assets/tomato.png";
import imob from "../assets/imob.png";
import { Link } from "react-router-dom";

function Card({ movie }) {
  const toggleFavorite = (x) => {
    x.target.classList.toggle("like");
  };
  return (
    <div className="card" data-testid="movie-card" key={movie.id}>
      <i
        onClick={(e) => toggleFavorite(e)}
        className=" fa fa-heart fa-2x favorite "
      ></i>
      <div className="card_image">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt="Poster"
            data-testid="movie-poster"
          />
        </Link>
      </div>
      <p className="card_release_date" data-testid="movie-release-date">
        {movie?.release_date}
      </p>
      <Link to={`/movies/${movie.id}`}>
        <h3 className="card_title" data-testid="movie-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h3>
      </Link>

      <div className="card_rating">
        <div className="card_imob_rating">
          <img src={imob} alt="imob" />
          <p> {movie?.vote_average * 10} / 100</p>
        </div>
        <div className="card_tomato_rating">
          <img src={tomato} alt="" />
          <p>97%</p>
        </div>
      </div>
      <p className="card_genre">Action</p>
    </div>
  );
}

export default Card;
