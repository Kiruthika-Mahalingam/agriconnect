/*
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import glogo from '../assets/google-logo.png';
import logo from '../assets/logo.jpg';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'kiru@05.com' && password === 'password') {
      setUser({ email });
      navigate('/community');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1>Welcome to AgriConnects</h1>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className="sign-up-btn">Sign up</button>
        </Link>
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="checkbox-container">
            Keep me logged in
            <input
              type="checkbox"
              checked={keepLoggedIn}
              onChange={() => setKeepLoggedIn(!keepLoggedIn)}
            />
            <span className="checkmark"></span>
          </label>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <p>OR</p>
        <button className="google-sign-in-btn">
          <img src={glogo} alt="Google Logo" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
*/

/*
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import glogo from '../assets/google-logo.png';
import logo from '../assets/logo.jpg';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'kiru@05.com' && password === 'password') {
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/community');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1>Welcome to AgriConnects</h1>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className="sign-up-btn">Sign up</button>
        </Link>
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <p>OR</p>
        <button className="google-sign-in-btn">
          <img src={glogo} alt="Google Logo" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
*/

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import glogo from '../assets/google-logo.png';
import logo from '../assets/logo.jpg';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'kiru@05.com' && password === 'password') {
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/community');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1>Welcome to AgriConnects</h1>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className="sign-up-btn">Sign up</button>
        </Link>
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <p>OR</p>
        <button className="google-sign-in-btn">
          <img src={glogo} alt="Google Logo" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;