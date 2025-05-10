import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateTournament.css';

const CreateTournament = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    startDate: '',
    endDate: '',
    maxParticipants: '',
    prizePool: '',
    rules: '',
    platform: '',
    registrationFee: '',
    tournamentType: 'single-elimination',
    streamUrl: '',
    bannerImage: null
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      bannerImage: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/tournaments', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      setSuccess('Tournament created successfully!');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create tournament');
    }
  };

  return (
    <div className="create-tournament-container">
      <div className="create-tournament-card">
        <h2>Create New Tournament</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tournament Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Game</label>
              <select
                name="game"
                value={formData.game}
                onChange={handleChange}
                required
              >
                <option value="">Select Game</option>
                <option value="Valorant">Valorant</option>
                <option value="CS:GO">CS:GO</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Dota 2">Dota 2</option>
                <option value="Fortnite">Fortnite</option>
                <option value="Apex Legends">Apex Legends</option>
              </select>
            </div>

            <div className="form-group">
              <label>Platform</label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
              >
                <option value="">Select Platform</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
                <option value="Mobile">Mobile</option>
                <option value="Cross-Platform">Cross-Platform</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Max Participants</label>
              <input
                type="number"
                name="maxParticipants"
                value={formData.maxParticipants}
                onChange={handleChange}
                min="2"
                required
              />
            </div>

            <div className="form-group">
              <label>Tournament Type</label>
              <select
                name="tournamentType"
                value={formData.tournamentType}
                onChange={handleChange}
                required
              >
                <option value="single-elimination">Single Elimination</option>
                <option value="double-elimination">Double Elimination</option>
                <option value="round-robin">Round Robin</option>
                <option value="swiss">Swiss</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Prize Pool ($)</label>
              <input
                type="number"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleChange}
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Registration Fee ($)</label>
              <input
                type="number"
                name="registrationFee"
                value={formData.registrationFee}
                onChange={handleChange}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Rules</label>
            <textarea
              name="rules"
              value={formData.rules}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Stream URL (Optional)</label>
            <input
              type="url"
              name="streamUrl"
              value={formData.streamUrl}
              onChange={handleChange}
              placeholder="https://twitch.tv/yourchannel"
            />
          </div>

          <div className="form-group">
            <label>Banner Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <small>Recommended size: 1200x400px</small>
          </div>

          <button type="submit" className="submit-btn">
            Create Tournament
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTournament;