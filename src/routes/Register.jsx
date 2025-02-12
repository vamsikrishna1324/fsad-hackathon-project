import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('PLAYER');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', {
        email,
        password,
        role,
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mt-5" data-aos="fade-up">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3" data-aos="fade-right" data-aos-delay="200">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="300">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
          <label>Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="PLAYER">Player</option>
            <option value="ORGANIZER">Organizer</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" data-aos="fade-up" data-aos-delay="500">Register</button>
      </form>
    </div>
  );
};

export default Register;