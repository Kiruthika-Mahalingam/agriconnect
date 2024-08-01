import React from 'react';
import { useParams } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { id } = useParams();
  return (
    <div className="register-container">
      <h1>Register for Workshop {id}</h1>
      <form className="register-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;