import React from 'react';
import '../styles/Banner.css'; 
import { FaTwitch, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const Banner = () => {
  return (
    <div className="banner">
      {/* Left Section: Logo and Text */}
      <div className="banner-left">
        <img src="/logo-gameing.png" alt="Game Logo" className="banner-logo" />
        <h1 className="banner-heading">
          Follow <span className="game-name">Pro Arena</span> for updates on exclusive tournaments and prizes
        </h1>
        <div className="banner-buttons">
          <button className="btn-twitch">
            <FaTwitch className="icon" /> Follow on Twitch
          </button>
          <button className="btn-twitter">
            <FaTwitter className="icon" /> Follow on Twitter
          </button>
        </div>
      </div>

      {/* Right Section: Gaming Character */}
      <div className="banner-right">
        <img src="/gaming-character.png" alt="Gaming Character" className="banner-character" />
      </div>
    </div>
  );
};

export default Banner;