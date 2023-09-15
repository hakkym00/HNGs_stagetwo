import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="links">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="copyright"> © 2021 MovieBox by Adriana Eka Prayudha </p>
    </div>
  );
}

export default Footer;
