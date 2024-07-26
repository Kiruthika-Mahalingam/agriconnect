import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Community from './components/Community';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';
import Feed from './components/Feed';  // Import Feed component

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
            <Route path="/feed" element={<Feed />} /> {/* Add Feed route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;