/*
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg'; // Adjust the path as needed

const Navbar = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
                <span className="welcome-text">AgriConnects</span>
            </div>
            
            <div className="profile-dropdown">
                <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
                    <div className="profile-img">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <span>
                        Name
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                    <li className="profile-dropdown-list-item">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} />
                            Edit Profile
                        </Link>
                    </li>
                    <li className="profile-dropdown-list-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <div className="notification-feedback">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </Link>
                <Link to="/community">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>
                <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
                    Feedback
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
*/



/*
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
                <span className="welcome-text">AgriConnects</span>
            </div>
            
            <div className="profile-dropdown">
                <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
                    <div className="profile-img">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <span>
                        Name
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                    <li className="profile-dropdown-list-item">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} />
                            Edit Profile
                        </Link>
                    </li>
                    <li className="profile-dropdown-list-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <div className="notification-feedback">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </Link>
                <Link to="/community">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>
                <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
                    Feedback
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
*/



/*
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch, faRobot } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../assets/logo.jpg';
import farmerAnimation from '../assets/farmer.json';
import Chatbot from './Chatbot'

const Navbar = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [chatbotVisible, setChatbotVisible] = useState(false); 
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const toggleChatbot = () => {
        setChatbotVisible(!chatbotVisible);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
                <span className="welcome-text">AgriConnects</span>
                <div className="farmer-animation">
                    <Lottie animationData={farmerAnimation} loop={true} />
                </div>
            </div>
            
            <div className="profile-dropdown">
                <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
                    <div className="profile-img">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <span>
                        Name
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                    <li className="profile-dropdown-list-item">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} />
                            Edit Profile
                        </Link>
                    </li>
                    <li className="profile-dropdown-list-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <div className="notification-feedback">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </Link>
                <Link to="/chatbot">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>
                
                <button onClick={toggleChatbot} className="icon-button"> 
                    <FontAwesomeIcon icon={faRobot} className="icon" /> 
                </button>

                <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
                    Feedback
                </button>
                <button onClick={() => window.location.href = '/contactform'} className="feedback-button">
                    Contact us
                </button>
                
            </div>
            {chatbotVisible && <Chatbot/>} 
        </nav>
    );
};

export default Navbar;

*/
/*<Link to="/community">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>*/




/*
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg'; 
import farmerAnimation from '../assets/farmer.json'; 

const Navbar = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
                <span className="welcome-text">AgriConnects</span>
                <div className="farmer-animation">
                    <Lottie animationData={farmerAnimation} loop={true} />
                </div>
            </div>
            
            <div className="profile-dropdown">
                <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
                    <div className="profile-img">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <span>
                        Name
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                    <li className="profile-dropdown-list-item">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} />
                            Edit Profile
                        </Link>
                    </li>
                    <li className="profile-dropdown-list-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <div className="notification-feedback">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </Link>
                <Link to="/community">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>
                <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
                    Feedback
                </button>
                <button onClick={() => window.location.href = '/contactform'} className="feedback-button">
                    Contact us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
*/


/*
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faSearch, faRobot } from '@fortawesome/free-solid-svg-icons'; // Removed faComments icon
import './Navbar.css';
import logo from '../assets/logo.jpg';
import farmerAnimation from '../assets/farmer.json';

const Navbar = ({ toggleChatbot }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <span className="welcome-text">AgriConnects</span>
        <div className="farmer-animation">
          <Lottie animationData={farmerAnimation} loop={true} />
        </div>
      </div>

      <div className="profile-dropdown">
        <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
          <div className="profile-img">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <span>
            Name
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
          <li className="profile-dropdown-list-item">
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} />
              Edit Profile
            </Link>
          </li>
          <li className="profile-dropdown-list-item">
            <a href="#">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Log out
            </a>
          </li>
        </ul>
      </div>
      <div className="notification-feedback">
        <Link to="/notifications">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </Link>
        <FontAwesomeIcon icon={faRobot} className="icon" onClick={toggleChatbot} /> 
        <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
          Feedback
        </button>
        <button onClick={() => window.location.href = '/contactform'} className="feedback-button">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
*/


/*
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate for navigation
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch, faRobot } from '@fortawesome/free-solid-svg-icons'; // Added faRobot icon
import './Navbar.css';
import logo from '../assets/logo.jpg'; 
import farmerAnimation from '../assets/farmer.json'; 

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // useNavigate hook

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openChatbot = () => {
    navigate('/chatbot'); // Navigate to chatbot page
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <span className="welcome-text">AgriConnects</span>
        <div className="farmer-animation">
          <Lottie animationData={farmerAnimation} loop={true} />
        </div>
      </div>
      
      <div className="profile-dropdown">
        <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
          <div className="profile-img">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <span>
            Name
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
          <li className="profile-dropdown-list-item">
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} />
              Edit Profile
            </Link>
          </li>
          <li className="profile-dropdown-list-item">
            <a href="#">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Log out
            </a>
          </li>
        </ul>
      </div>
      <div className="notification-feedback">
        <Link to="/notifications">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </Link>
        <FontAwesomeIcon icon={faRobot} className="icon" onClick={openChatbot} />
        <button onClick={() => window.location.href = '/feedbackform'} className="feedback-button">
          Feedback
        </button>
        <button onClick={() => window.location.href = '/contactform'} className="feedback-button">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
*/



import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate for navigation
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell, faComments, faSearch, faRobot } from '@fortawesome/free-solid-svg-icons'; // Added faRobot icon
import './Navbar.css';
import logo from '../assets/logo.jpg'; 
import farmerAnimation from '../assets/farmer.json'; 

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // useNavigate hook

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openChatbot = () => {
    navigate('/chatbot'); // Navigate to chatbot page
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <span className="welcome-text">AgriConnects</span>
        <div className="farmer-animation">
          <Lottie animationData={farmerAnimation} loop={true} />
        </div>
      </div>
      
      <div className="profile-dropdown">
        <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
          <div className="profile-img">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <span>
            Name
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
          <li className="profile-dropdown-list-item">
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} />
              Edit Profile
            </Link>
          </li>
          <li className="profile-dropdown-list-item">
            <a href="#">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Log out
            </a>
          </li>
        </ul>
      </div>
      <div className="notification-feedback">
        <Link to="/notifications">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </Link>
        <FontAwesomeIcon icon={faRobot} className="icon" onClick={openChatbot} /> {/* Chatbot icon */}
        <Link to="/feedbackform" className="button">
          Feedback
        </Link>
        <Link to="/contactform" className="button">
          Contact 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
