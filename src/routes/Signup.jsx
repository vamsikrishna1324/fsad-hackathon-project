import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';
import logo from '/public/logo-gameing.png'; // Adjusted import path

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

   try {
  const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
  localStorage.setItem('token', response.data.token);
  navigate('/login'); // Redirect to login after signup
} catch (error) {
  const message = error.response?.data?.message || 'Registration failed. Please try again.';
  setError(message);
}

  };

  return (
    <div className="signup-page">
      <div className="signup-container" data-aos="fade-up">
        <div className="signup-header">
          <img src={logo} alt="PROARENA Logo" className="signup-logo" />
        </div>

        <h2>Join PROARENA</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group" data-aos="fade-right" data-aos-delay="200">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <div className="form-group" data-aos="fade-left" data-aos-delay="300">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" data-aos="fade-right" data-aos-delay="400">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          <div className="form-group" data-aos="fade-left" data-aos-delay="500">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            data-aos="fade-up"
            data-aos-delay="600"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        <div className="login-link" data-aos="fade-up" data-aos-delay="700">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;