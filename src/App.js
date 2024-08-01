

/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Community from './components/Community';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';
import Feed from './components/Feed';
import CommunityForum from './components/CommunityForum';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user session or token here if applicable
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Navbar />
            <SideMenu />
            <div className="main-content">
              <Routes>
                <Route path="/community" element={<Community />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/edit-profile" element={<EditProfile user={user} />} />
                <Route path="/feedbackform" element={<FeedbackForm />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="*" element={<Navigate to="/community" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Community from './components/Community';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';
import Feed from './components/Feed';
import CommunityForum from './components/CommunityForum';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';

const App = () => {
  const [user, setUser] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false); // Added state for chatbot

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  useEffect(() => {
    // Check for user session or token here if applicable
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Navbar toggleChatbot={toggleChatbot} />
            <SideMenu />
            <div className="main-content">
              <Routes>
                
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/edit-profile" element={<EditProfile user={user} />} />
                <Route path="/feedbackform" element={<FeedbackForm />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="*" element={<Navigate to="/feed" />} />
              </Routes>
            </div>
            {chatbotOpen && <Chatbot closeChatbot={toggleChatbot} />} 
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
*/


/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';
import Feed from './components/Feed';
import CommunityForum from './components/CommunityForum';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
   
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Navbar />
            <SideMenu />
            <div className="main-content">
              <Routes>
                
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/edit-profile" element={<EditProfile user={user} />} />
                <Route path="/feedbackform" element={<FeedbackForm />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="/chatbot" element={<Chatbot />} /> 
                <Route path="*" element={<Navigate to="/feed" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
*/




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SideMenu from './components/SideMenu';
// import Settings from './components/Settings';
// import Navbar from './components/Navbar';
// import EditProfile from './components/EditProfile';
// import Notification from './components/Notification';
// import FeedbackForm from './components/FeedbackForm';
// import Feed from './components/Feed';
// import CommunityForum from './components/CommunityForum';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Chatbot from './components/Chatbot';
// import ContactForm from './components/ContactForm'; // Import ContactForm
// import FarmingTips from './components/FarmingTips';
// import FarmingQA from './components/FarmingQA';
// import SuccessStories from './components/SuccessStories';
// import Home from './components/Home'
// import MarketPrices from './components/MarketPrices';
// import Events from './components/Events'


// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Initialize user data if needed
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//         {user ? (
//           <>
//             <Navbar />
//             <SideMenu />
//             <div className="main-content">
//               <Routes>
//                 <Route path="/settings" element={<Settings />} />
//                 <Route path="/notifications" element={<Notification />} />
//                 <Route path="/edit-profile" element={<EditProfile user={user} />} />
//                 <Route path="/feedbackform" element={<FeedbackForm />} />
//                 <Route path="/feed" element={<Feed />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/communityforum" element={<CommunityForum />} />
//                 <Route path="/chatbot" element={<Chatbot />} />
//                 <Route path="/contactform" element={<ContactForm />} />
//                 <Route path='/farmingtips' element={<FarmingTips/>}/>
//                 <Route path='/farmingqa' element={<FarmingQA/>}/>
//                 <Route path='/successstories' element={<SuccessStories/>}/>
//                 <Route path='/marketprices' element={<MarketPrices/>}/>
//                 <Route path="/events" element={<Events/>} />
//                 <Route path="*" element={<Navigate to="/feed" />} />
//               </Routes>
//             </div>
//           </>
//         ) : (
//           <Routes>
//             <Route path="/" element={<Login setUser={setUser} />} />
//             <Route path="/signup" element={<SignUp setUser={setUser} />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Notification from './components/Notification';
import FeedbackForm from './components/FeedbackForm';
import Feed from './components/Feed';
import CommunityForum from './components/CommunityForum';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';
import ContactForm from './components/ContactForm';
import FarmingTips from './components/FarmingTips';
import FarmingQA from './components/FarmingQA';
import SuccessStories from './components/SuccessStories';
import Home from './components/Home';
import MarketPrices from './components/MarketPrices';
import Events from './components/Events';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize user data if needed
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Navbar />
            <SideMenu />
            <div className="main-content">
              <Routes>
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/edit-profile" element={<EditProfile user={user} />} />
                <Route path="/feedbackform" element={<FeedbackForm />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/home" element={<Home />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/farmingtips" element={<FarmingTips />} />
                <Route path="/farmingqa" element={<FarmingQA />} />
                <Route path="/successstories" element={<SuccessStories />} />
                <Route path="/marketprices" element={<MarketPrices />} />
                <Route path="/events" element={<Events />} />
                <Route path="*" element={<Navigate to="/feed" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
