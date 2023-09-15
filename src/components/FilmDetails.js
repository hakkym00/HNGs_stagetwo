import React, { useState, useEffect } from "react";
import expandarrow from "../assets/expandarrow.png";
import list from "../assets/list.png";
import tickets from "../assets/tickets.png";
import star from "../assets/star.png";
import poster from "../assets/poster.png";
import play from "../assets/playtr.png";
import bg from "../assets/bg.png";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function FilmDetails({ id }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const request = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setLoading(false);
        setMovie(request.data);
        setError("");
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchMovie();
  }, [id]);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox> {error} </MessageBox>
  ) : (
    <div className="filmDetails">
      <div
        className="filmPlayer"
        style={{
          backgroundImage: movie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
            : `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <button className="playBtn">
          <img src={play} alt="play" />
          <p>Watch Trailer</p>
        </button>
      </div>
      <div className="filmDetailsContainer">
        <div className="movieInfo">
          <div className="movieInfoA">
            <div>
              <p data-testid="movie-title">{movie?.original_title}</p> •{" "}
              <p data-testid="movie-release-date">{movie?.release_date}</p>•
              PG-13 • <span data-testid="movie-runtime">{movie?.runtime}</span>
              minutes
              <span> Action</span>
              <span>Drama</span>
            </div>
          </div>
          <div className="movieInfoB">
            <img src={star} alt="star" /> <p>8.5</p> | <span>350k</span>
          </div>
        </div>
        <div className="detailsContainerInfo">
          <div className="filmDetailsContainerA">
            <div>
              <p className="movieDescriptn" data-testid="movie-overview">
                {movie?.overview}
              </p>
            </div>
            <div className="movieProducers">
              <p>
                Directors:
                <span> hakkym</span>
              </p>
              <p>
                Writers:
                <span>hakkym</span>
              </p>
              <p>
                Stars:
                <span>hakkym</span>
              </p>
            </div>
            <div className="movieSpecs">
              <div>
                <span className="topRatedM">Top Rated Movie</span>
                <p className="awardNom">Awards 9 nominations</p>
              </div>
              <img src={expandarrow} alt="expand" />
            </div>
          </div>
          <div className="otherMovieSec">
            <div className="showTime">
              <img src={tickets} alt="tickets" /> <p>See Showtimes</p>
            </div>
            <div className="moreWatch">
              <img src={list} alt="menu" /> <p>More watch options</p>
            </div>
            <div
              className="bestMovies"
              style={{
                backgroundImage: `url(${poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div>
                <img src={list} alt="menu" />
                <p>The Best movies and Shows in September</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
