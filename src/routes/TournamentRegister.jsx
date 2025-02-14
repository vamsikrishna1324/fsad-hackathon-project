import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Register.css";

const tournaments = [
  {
    id: 1,
    title: "Valorant Championship",
    date: "15 Sept 2023",
    video: "/videos/valorant.mp4",
    prize: "$50,000",
    format: "5v5",
    description: "The ultimate Valorant showdown featuring top teams worldwide.",
    rules: ["Best of 3 matches", "No restricted agents", "Single elimination"],
    prizes: ["1st: $30,000", "2nd: $15,000", "3rd: $5,000"],
    schedule: ["Reg Ends: 10 Sept", "Group Stage: 12 Sept", "Finals: 15 Sept"],
  },
];

const TournamentRegister = () => {
  const { tournamentId } = useParams();
  const tournament = tournaments.find((t) => t.id === parseInt(tournamentId));

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    region: "",
  });

  if (!tournament)
    return <div className="p-8 text-red-500 text-xl">Tournament not found!</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration submitted for ${tournament.title}!`);
  };

  return (
    <div className="register-container">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted className="video-content">
          <source src={tournament.video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="tournament-title">{tournament.title}</h1>

        <div className="tournament-details">
          <div className="detail-item">
            <p className="detail-label">Date</p>
            <p className="detail-value">{tournament.date}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Prize Pool</p>
            <p className="detail-value">{tournament.prize}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Format</p>
            <p className="detail-value">{tournament.format}</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="registration-form">
          <h2 className="form-title">Register for Tournament</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>In-Game Username</label>
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Region</label>
              <select
                required
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
              >
                <option value="">Select Region</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Complete Registration
            </button>
          </form>
        </div>

        {/* Tournament Information */}
        <div className="tournament-info">
          <div className="info-card">
            <h3>About the Tournament</h3>
            <p>{tournament.description}</p>
          </div>

          <div className="info-card">
            <h3>Rules</h3>
            <ul>
              {tournament.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Prizes</h3>
            <ul>
              {tournament.prizes.map((prize, i) => (
                <li key={i}>{prize}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Schedule</h3>
            <ul>
              {tournament.schedule.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="back-link">
          <Link to="/">← Back to Tournaments</Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegister;
