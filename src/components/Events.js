// src/components/Events.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Schemes from './Schemes';
import SchemeDetails from './SchemeDetails';
import Register from './Register';
import './Events.css'; // Add your CSS for styling the Events page

const Events = () => {
  return (
    <div className="events-container">
      <Routes>
        <Route path="/" element={<Schemes />} />
        <Route path="scheme-details/:id" element={<SchemeDetails />} />
        <Route path="register/:id" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Events;
