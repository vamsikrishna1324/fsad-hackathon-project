import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the separated CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="PROARENA Logo" className="logo-img" />
          <span className="logo-text">PROARENA</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/play">💫Play</Link>
        <Link to="/leaderboard">🏆Leaderboard</Link>
        <Link to="/groups">🤲Groups</Link>
        <Link to="/gaming-gear">⚙️Gaming Gear</Link>
        <Link to="/business">🤝Business</Link>
        <Link to="/more">🌈More</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/create-tournament" className="btn-create">Create Tournament</Link>
        <Link to="/login" className="btn-login">LOGIN/SIGN UP</Link>
      </div>
    </nav>
  );
};

export default Navbar;