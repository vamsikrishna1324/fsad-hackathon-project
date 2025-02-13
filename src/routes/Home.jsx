import React from 'react';
import '../App.css';
import '../styles/GamingGearSection.css';
import GamingGearSection from '../components/GamingGearSection';
import Banner from '../components/Banner';
import TopGroups from '../components/TopGroups'; 
import Navbar from '../components/Navbar';
import TournamentCards from '../components/TournamentCards';

const Home = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <div className="hero-content">
          <h1 className="hero-title">Next-Level Gaming Arena</h1>
          <p className="hero-subtitle">Join PROARENA's biggest tournaments anytime, anywhere</p>
        </div>
      </main>

      <TournamentCards />
      <GamingGearSection />
      <Banner />
      <TopGroups />
    </div>
  );
};

export default Home;
