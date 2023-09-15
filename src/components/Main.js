import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Main() {
  console.log(process.env);
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchMovie() {
      try {
        const request = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const tenMovies =
          request.data.results.length <= 10
            ? request.data.results
            : request.data.results.slice(0, 10);
        setLoading(false);
        setMovie(tenMovies);
        setError("");
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchMovie();
  }, []);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox> {error} </MessageBox>
  ) : (
    <div className="Main">
      <div className="featured">
        <h2> Featured Movie </h2>
        <p className="seeMore">See more </p>
      </div>
      <div className="card_container">
        {movies?.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
