import React, { useState } from 'react';
import { FaCog, FaQuestionCircle, FaEnvelope, FaUserShield, FaGamepad, FaGlobe } from 'react-icons/fa';
import '../styles/More.css';

const More = () => {
  const [activeTab, setActiveTab] = useState('settings');

  const tabs = [
    { id: 'settings', icon: <FaCog />, label: 'Settings' },
    { id: 'help', icon: <FaQuestionCircle />, label: 'Help Center' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact Us' },
    { id: 'privacy', icon: <FaUserShield />, label: 'Privacy Policy' },
    { id: 'games', icon: <FaGamepad />, label: 'Supported Games' },
    { id: 'language', icon: <FaGlobe />, label: 'Language' }
  ];

  const content = {
    settings: (
      <div className="tab-content">
        <h2>Account Settings</h2>
        <div className="setting-item">
          <label>Notification Preferences</label>
          <select>
            <option>All Notifications</option>
            <option>Tournaments Only</option>
            <option>Messages Only</option>
            <option>None</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Dark Mode</label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <button className="save-btn">Save Changes</button>
      </div>
    ),
    help: (
      <div className="tab-content">
        <h2>Help Center</h2>
        <div className="faq-item">
          <h3>How to create a tournament?</h3>
          <p>Navigate to the Create Tournament page, fill in the details, and submit the form.</p>
        </div>
        <div className="faq-item">
          <h3>How to invite friends?</h3>
          <p>Go to the Play section, select a game, and click the invite button next to your friend's name.</p>
        </div>
        <div className="search-help">
          <input type="text" placeholder="Search help articles..." />
          <button>Search</button>
        </div>
      </div>
    ),
    contact: (
      <div className="tab-content">
        <h2>Contact Our Team</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <select>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Report a Bug</option>
              <option>Partnership</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    ),
    privacy: (
      <div className="tab-content">
        <h2>Privacy Policy</h2>
        <div className="privacy-content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide when creating an account, joining tournaments, or using our services.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>Your information is used to provide and improve our services, communicate with you, and ensure platform security.</p>
          
          <h3>3. Data Security</h3>
          <p>We implement industry-standard security measures to protect your personal information.</p>
        </div>
      </div>
    ),
    games: (
      <div className="tab-content">
        <h2>Supported Games</h2>
        <div className="games-grid">
          {['Valorant', 'League of Legends', 'CS:GO', 'Dota 2', 'Fortnite', 'Apex Legends'].map(game => (
            <div key={game} className="game-card">
              <div className="game-icon">{game.charAt(0)}</div>
              <h3>{game}</h3>
              <p>Tournaments available</p>
            </div>
          ))}
        </div>
      </div>
    ),
    language: (
      <div className="tab-content">
        <h2>Language Settings</h2>
        <div className="language-options">
          {['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'].map(lang => (
            <div key={lang} className="language-option">
              <input 
                type="radio" 
                id={lang.toLowerCase()} 
                name="language" 
                value={lang.toLowerCase()}
                defaultChecked={lang === 'English'}
              />
              <label htmlFor={lang.toLowerCase()}>{lang}</label>
            </div>
          ))}
        </div>
        <button className="save-btn">Apply Language</button>
      </div>
    )
  };

  return (
    <div className="more-page">
      <div className="more-header">
        <h1>More Options</h1>
        <p>Customize your PROARENA experience</p>
      </div>
      
      <div className="more-container">
        <div className="sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`sidebar-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="main-content">
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default More;