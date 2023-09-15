import React, { memo } from "react";
import Sidebar from "../components/Sidebar";
import FilmDetails from "../components/FilmDetails";
import { useParams } from "react-router-dom";
import Menu from "../assets/Menu.png";

function Details() {
  const params = useParams();
  const { id } = params;

  const displaySidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("sidebar-cliked");
  };

  return (
    <div className="details">
      <div className="sidebarShow" onClick={displaySidebar}>
        <img src={Menu} alt="menu" />
      </div>
      <Sidebar />
      <FilmDetails id={id} />
    </div>
  );
}

export default Details;
