import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
import { FaShieldAlt, FaLock, FaQuestionCircle, FaInfoCircle, FaExclamationCircle, FaSignOutAlt } from 'react-icons/fa';

const Settings = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Support & About</h3>
        <ul>
          <li onClick={() => navigateTo('/help')}><FaQuestionCircle /> Help </li>
          <li onClick={() => navigateTo('/terms-and-policies')}><FaInfoCircle /> Terms and Policies</li>
        </ul>
      </div>
     
      <div className="settings-section">
        <h3>Actions</h3>
        <ul>
          <li onClick={() => navigateTo('/report')}><FaExclamationCircle /> Report</li>
          <li onClick={() => navigateTo('/security')}><FaShieldAlt /> Security</li>
          <li onClick={() => navigateTo('/privacy')}><FaLock /> Privacy</li>
          <li onClick={() => navigateTo('/logout')}><FaSignOutAlt /> Log out</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
