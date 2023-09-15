import React from "react";
import logob from "../assets/logob.png";
import tvseries from "../assets/tvseries.png";
import upcoming from "../assets/upcoming.png";
import movies from "../assets/movies.png";
import home from "../assets/Home.png";
import logout from "../assets/logout.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("sidebar-cliked");
  };
  return (
    <div className="sidebar">
      <div className="close-sidebar">
        <span onClick={closeSidebar}>X</span>
      </div>
      <div className="movieIcon">
        <img src={logob} alt="logo" />
      </div>
      <div className="sidebar_menu">
        <Link to={`/`}>
          <div>
            <img src={home} alt="Home" />
            <p>Home</p>
          </div>
        </Link>

        <div className="active">
          <img src={movies} alt="Movies" />
          <p>Movie</p>
        </div>
        <div>
          <img src={tvseries} alt="Tvseries" />
          <p>Tv Series</p>
        </div>
        <div>
          <img src={upcoming} alt="upcoming" />
          <p>Upcoming</p>
        </div>
      </div>
      <div>
        <div className="sidebar_play">
          <p className="play_movie">
            Play movie quizes <span>and earn</span> <span>free tickets</span>
          </p>
          <p className="currently_playing">50k people are playing now</p>
          <p className="start_playing">Start playing</p>
        </div>
        <div className="logout">
          <img src={logout} alt="logout" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
