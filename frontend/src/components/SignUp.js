/*
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import glogo from '../assets/google-logo.png';

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setUser({ email });
    navigate('/community');
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1>Welcome to AgriConnects</h1>
        <p>Already have an account?</p>
        <Link to="/">
          <button className="sign-in-btn">Sign In</button>
        </Link>
      </div>
      <div className="right-panel">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="create-account-btn">Create Account</button>
        </form>
        <p>OR</p>
        <button className="google-sign-in-btn">
          <img src={glogo} alt="Google Logo" className='glogo' /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
*/



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import glogo from '../assets/google-logo.png';

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setUser({ email });
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/community');
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1>Welcome to AgriConnects</h1>
        <p>Already have an account?</p>
        <Link to="/">
          <button className="sign-in-btn">Sign In</button>
        </Link>
      </div>
      <div className="right-panel">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="create-account-btn">Create Account</button>
        </form>
        <p>OR</p>
        <button className="google-sign-in-btn">
          <img src={glogo} alt="Google Logo" className='glogo' /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
