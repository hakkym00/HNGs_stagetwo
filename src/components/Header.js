import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import Search from "../assets/Search.png";
import Play from "../assets/Play.png";
import tomato from "../assets/tomato.png";
import imob from "../assets/imob.png";
import Menu from "../assets/Menu.png";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import SearchedMovies from "./SearchedMovies";

function Header() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );

      setMovie(request.data.results[0]);
    }
    fetchMovie();
  }, []);

  const searchMovieTitle = (e) => {
    setSearchKeyword(e.target.value);
    const title = e.target.value;
    async function fetchMovies() {
      console.log(searchKeyword);
      setLoading(true);
      try {
        const request = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setLoading(false);
        setMovies(request.data.results);
        setError("");
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchMovies();
  };

  console.log(movies);
  return (
    <div
      className="Header"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="navBar">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="searchB">
          <div className="searchBar">
            <input
              type="text"
              placeholder="What do you want to watch? "
              value={searchKeyword}
              onChange={(e) => searchMovieTitle(e)}
            />
            <img src={Search} alt="search" />
          </div>
          {searchKeyword && (
            <div className="searchResult">
              {loading && <LoadingBox />}
              {error && <MessageBox> {error} </MessageBox>}
              {movies &&
                movies?.map((movieInfo) => {
                  console.log(movieInfo);
                  return (
                    <SearchedMovies movie={movieInfo} key={movieInfo.id} />
                  );
                })}
            </div>
          )}
        </div>
        <div className="menu">
          <p>Sign in</p>
          <img src={Menu} alt="menu" />
        </div>
      </div>
      <div className="description">
        <div className="desTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="desRating">
          <div className="imobRating">
            <img src={imob} alt="imob" />
            <p>86.0 / 100</p>
          </div>
          <div className="cherryRating">
            <img src={tomato} alt="" />
            <p>97%</p>
          </div>
        </div>
        <div className="desInfo"> {movie?.overview}</div>
        <div className="desButton">
          <img src={Play} alt="Play" /> <p>WATCH TRAILER</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
