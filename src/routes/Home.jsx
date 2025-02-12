import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Cards.css';
import '../styles/GamingGearSection.css';
import GamingGearSection from '../components/GamingGearSection';
import Banner from '../components/Banner';
import TopGroups from '../components/TopGroups'; 

const Home = () => {
  const tournaments = [
    { img: "/game1.jpg", title: "Valorant Championship", date: "15 Sept 2023" },
    { img: "/game2.jpg", title: "CS:GO Showdown", date: "20 Sept 2023" },
    { img: "/game3.jpg", title: "Fortnite Battle Royale", date: "25 Sept 2023" },
    { img: "/game4.jpg", title: "League of Legends Clash", date: "30 Sept 2023" },
    { img: "/game5.jpg", title: "Delta Force Tournament", date: "5 Oct 2023" },
    { img: "/game6.jpg", title: "Apex Legends Showdown", date: "10 Oct 2023" },
    { img: "/game7.jpg", title: "Overwatch 2 Tournament", date: "15 Oct 2023" },
    { img: "/game8.jpg", title: "PUBG PC Challenge", date: "20 Oct 2023" },
    { img: "/game9.jpg", title: "Marvel Rivals Tournament", date: "20 Oct 2023" },
  ];

  return (
    <div className="app">
      {/* Navigation Bar */}
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

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-content">
          <h1 className="hero-title">Next-Level Gaming Arena</h1>
          <p className="hero-subtitle">Join PROARENA's biggest tournaments anytime, anywhere</p>
        </div>
      </main>

      {/* Featured Tournaments Section */}
      <section className="tournaments-section">
        <h2 className="section-title">Featured Tournaments</h2>
        <div className="cards-grid">
          {tournaments.map((tournament, index) => (
            <div key={index} className="card">
              <span className="featured-badge">Featured</span>
              <img src={tournament.img} alt={`${tournament.title} Tournament`} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{tournament.title}</h3>
                <p className="card-subtitle">Registration Starts: {tournament.date}</p>
                <button className="card-button">Registration Open</button>
              </div>
            </div>
          ))}
          <a href="create-tournament" className="primary-btn">
            <button className="card-button">Create new Tournament</button>
          </a>
        </div>
      </section>

      {/* Gaming Gear Section */}
      <GamingGearSection />

      {/* Banner Section */}
      <Banner />
         {/* Top Gaming Groups Section */}
         <TopGroups /> {/* Added the TopGroups Component Here */}
    </div>
  );
};

export default Home;
