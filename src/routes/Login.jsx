import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import logo from '/public/logo.png'; // Adjusted import path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  try {
    const response = await axios.post('http://localhost:8080/api/users/login', {
      email,
      password,
    });

    if (response.data === 'Login successful!') {
      navigate('/dashboard'); // or wherever you want to go
    } else {
      setError(response.data); // e.g. "Invalid email or password!"
    }
  } catch (error) {
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="login-page">
      <div className="login-container" data-aos="fade-up">
        <div className="login-header">
          <img src={logo} alt="PROARENA Logo" className="login-logo" />
        </div>

        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group" data-aos="fade-right" data-aos-delay="200">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" data-aos="fade-left" data-aos-delay="300">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            data-aos="fade-up"
            data-aos-delay="400"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="signup-link" data-aos="fade-up" data-aos-delay="500">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;