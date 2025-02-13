import React from 'react';
import '../styles/Register.css';

const Register = () => {
  return (
    <div className="register-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="tournament-title">Valorant Championship 5v5 Summer Tournament</h1>
          <p className="tournament-subtitle">Join the ultimate Championship showdown!</p>
          <div className="tournament-details">
            <div className="detail-item">
              <span className="detail-label">Date:</span>
              <span className="detail-value">August 15, 2023</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Prize Pool:</span>
              <span className="detail-value">$5,000</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Format:</span>
              <span className="detail-value">1v1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="registration-form">
        <h2 className="form-title">Register Now</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">In-Game Username</label>
            <input type="text" id="username" placeholder="Enter your in-game username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="region">Region</label>
            <select id="region" required>
              <option value="">Select your region</option>
              <option value="na">North America</option>
              <option value="eu">Europe</option>
              <option value="asia">Asia</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>

      {/* Tournament Details Section */}
      <div className="tournament-info">
        <h2 className="info-title">Tournament Details</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Rules</h3>
            <ul>
              <li>Best of 3 matches</li>
              <li>No banned cards</li>
              <li>Single elimination</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Prizes</h3>
            <ul>
              <li>1st Place: $3,000</li>
              <li>2nd Place: $1,500</li>
              <li>3rd Place: $500</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Schedule</h3>
            <ul>
              <li>Registration Deadline: August 10</li>
              <li>Tournament Start: August 15</li>
              <li>Finals: August 20</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;