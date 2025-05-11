import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

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
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        ) : (
          <Link to="/login" className="btn-login">LOGIN/SIGN UP</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
