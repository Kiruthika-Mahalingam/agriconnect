
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCog, FaHome, FaUser, FaLeaf, FaCloudSun, FaLightbulb, FaCalendarAlt, FaDollarSign, FaBook, FaStar, FaComments,  FaHandshake } from 'react-icons/fa';
import './SideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link to="/home" className="sidebar-item" onClick={toggleSidebar}>
          
        </Link>
        <Link to="/home" className="sidebar-item" onClick={toggleSidebar}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/feed" className="sidebar-item" onClick={toggleSidebar}>
          <FaUser className="icon" /> Feed
        </Link>
        <Link to="/crops-livestock" className="sidebar-item" onClick={toggleSidebar}>
          <FaLeaf className="icon" /> Crops & Livestock
        </Link>
        <Link to="/weather" className="sidebar-item" onClick={toggleSidebar}>
          <FaCloudSun className="icon" /> Weather Updates
        </Link>
        <Link to="/tips" className="sidebar-item" onClick={toggleSidebar}>
          <FaLightbulb className="icon" /> Farming Tips
        </Link>
        <Link to="/events" className="sidebar-item" onClick={toggleSidebar}>
          <FaCalendarAlt className="icon" /> Events & Workshops
        </Link>
        <Link to="/market-prices" className="sidebar-item" onClick={toggleSidebar}>
          <FaDollarSign className="icon" /> Market Prices
        </Link>
        <Link to="/resources" className="sidebar-item" onClick={toggleSidebar}>
          <FaBook className="icon" /> Resources
        </Link>
        <Link to="/success-stories" className="sidebar-item" onClick={toggleSidebar}>
          <FaStar className="icon" /> Success Stories
        </Link>
        <Link to="/communityforum" className="sidebar-item" onClick={toggleSidebar}>
          <FaComments className="icon" /> Community Forum
        </Link>
        
        <Link to="/partners" className="sidebar-item" onClick={toggleSidebar}>
          <FaHandshake className="icon" /> Partner Organizations
        </Link>
        <Link to="/settings" className="sidebar-item" onClick={toggleSidebar}>
          <FaCog className="icon" /> Settings
        </Link>
      </div>
    </>
  );
};

export default SideMenu;
