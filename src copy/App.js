// src/App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Popular from './components/Popular';
import Topics from './components/Topics';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/topics" element={<Topics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Community from './components/Community';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'Kiruthika M',
        email: 'kiru@05.com',
        phone: '6382981249',
      });
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <SideMenu />
        <div className="main-content">
          <Routes>
            
            
           
            
            
            <Route path="/community" element={<Community />} />
            
            <Route path="/settings" element={<Settings />} />
           
            <Route path="/notifications" element={<Notification />} />
            <Route path="/edit-profile" element={<EditProfile user={user} />} />
            
            
            <Route path="/feedbackform" element={<FeedbackForm />} />
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
