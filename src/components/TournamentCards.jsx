import React from 'react';
import '../styles/Cards.css';

const TournamentsSection = () => {
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
              <div className="card-buttons">
                <a href="/ExpandedCard">
                  <button className="card-view-but">View</button>
                </a>
                <button className="card-button">Registration Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="/create-tournament" className="primary-btn">
        Create new Tournament
      </a>
    </section>
  );
};

export default TournamentsSection;
