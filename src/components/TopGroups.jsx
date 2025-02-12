import React from 'react';
import '../styles/TopGroups.css';

const TopGroups = () => {
  return (
    <section className="top-groups">
      <h2 className="section-title">TOP GROUPS</h2>
      
      <div className="groups-container">
        {/* Fortnite Group Card */}
        <div className="group-card">
          <img src="/fortnite-cover.jpg" alt="Fortnite" className="game-cover" />
          <h3 className="game-title">Fortnite</h3>
          <p className="member-count">1.2M members</p>
          <button className="join-button">Join</button>
        </div>

        {/* PUBG Mobile Group Card */}
        <div className="group-card">
          <img src="/pubg-mobile-cover.jpg" alt="PUBG Mobile" className="game-cover" />
          <h3 className="game-title">PUBG Mobile</h3>
          <p className="member-count">980K members</p>
          <button className="join-button">Join</button>
        </div>

        {/* FIFA 21 Group Card */}
        <div className="group-card">
          <img src="/fifa21-cover.jpg" alt="FIFA 21" className="game-cover" />
          <h3 className="game-title">FIFA 21</h3>
          <p className="member-count">750K members</p>
          <button className="join-button">Join</button>
        </div>

        {/* Create Group Card */}
        <div className="create-group-card">
          <div className="plus-icon">+</div>
          <h3 className="create-group-text">Create Group</h3>
        </div>
      </div>
    </section>
  );
};

export default TopGroups;