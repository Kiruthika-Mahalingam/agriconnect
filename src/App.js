

// /*
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SideMenu from './components/SideMenu';
// import Settings from './components/Settings';
// import Community from './components/Community';
// import Navbar from './components/Navbar';
// import EditProfile from './components/EditProfile';
// import Notification from './components/Notification';
// import FeedbackForm from './components/FeedbackForm';
// import Feed from './components/Feed';
// import CommunityForum from './components/CommunityForum';
// import Login from './components/Login';
// import SignUp from './components/SignUp';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check for user session or token here if applicable
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
//                 <Route path="/community" element={<Community />} />
//                 <Route path="/settings" element={<Settings />} />
//                 <Route path="/notifications" element={<Notification />} />
//                 <Route path="/edit-profile" element={<EditProfile user={user} />} />
//                 <Route path="/feedbackform" element={<FeedbackForm />} />
//                 <Route path="/feed" element={<Feed />} />
//                 <Route path="/communityforum" element={<CommunityForum />} />
//                 <Route path="*" element={<Navigate to="/community" />} />
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
// */

// /*
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SideMenu from './components/SideMenu';
// import Settings from './components/Settings';
// import Community from './components/Community';
// import Navbar from './components/Navbar';
// import EditProfile from './components/EditProfile';
// import Notification from './components/Notification';
// import FeedbackForm from './components/FeedbackForm';
// import Feed from './components/Feed';
// import CommunityForum from './components/CommunityForum';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Chatbot from './components/Chatbot';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [chatbotOpen, setChatbotOpen] = useState(false); // Added state for chatbot

//   const toggleChatbot = () => {
//     setChatbotOpen(!chatbotOpen);
//   };

//   useEffect(() => {
//     // Check for user session or token here if applicable
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//         {user ? (
//           <>
//             <Navbar toggleChatbot={toggleChatbot} />
//             <SideMenu />
//             <div className="main-content">
//               <Routes>
                
//                 <Route path="/settings" element={<Settings />} />
//                 <Route path="/notifications" element={<Notification />} />
//                 <Route path="/edit-profile" element={<EditProfile user={user} />} />
//                 <Route path="/feedbackform" element={<FeedbackForm />} />
//                 <Route path="/feed" element={<Feed />} />
//                 <Route path="/communityforum" element={<CommunityForum />} />
//                 <Route path="*" element={<Navigate to="/feed" />} />
//               </Routes>
//             </div>
//             {chatbotOpen && <Chatbot closeChatbot={toggleChatbot} />} 
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
// */


// /*
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

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
   
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
//                 <Route path="/communityforum" element={<CommunityForum />} />
//                 <Route path="/chatbot" element={<Chatbot />} /> 
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
// */




// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import SideMenu from './components/SideMenu';
// // import Settings from './components/Settings';
// // import Navbar from './components/Navbar';
// // import EditProfile from './components/EditProfile';
// // import Notification from './components/Notification';
// // import FeedbackForm from './components/FeedbackForm';
// // import Feed from './components/Feed';
// // import CommunityForum from './components/CommunityForum';
// // import Login from './components/Login';
// // import SignUp from './components/SignUp';
// // import Chatbot from './components/Chatbot';
// // import ContactForm from './components/ContactForm'; // Import ContactForm
// // import FarmingTips from './components/FarmingTips';
// // import FarmingQA from './components/FarmingQA';
// // import SuccessStories from './components/SuccessStories';
// // import Home from './components/Home'
// // import MarketPrices from './components/MarketPrices';
// // import Events from './components/Events'


// // const App = () => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     // Initialize user data if needed
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="app">
// //         {user ? (
// //           <>
// //             <Navbar />
// //             <SideMenu />
// //             <div className="main-content">
// //               <Routes>
// //                 <Route path="/settings" element={<Settings />} />
// //                 <Route path="/notifications" element={<Notification />} />
// //                 <Route path="/edit-profile" element={<EditProfile user={user} />} />
// //                 <Route path="/feedbackform" element={<FeedbackForm />} />
// //                 <Route path="/feed" element={<Feed />} />
// //                 <Route path="/home" element={<Home />} />
// //                 <Route path="/communityforum" element={<CommunityForum />} />
// //                 <Route path="/chatbot" element={<Chatbot />} />
// //                 <Route path="/contactform" element={<ContactForm />} />
// //                 <Route path='/farmingtips' element={<FarmingTips/>}/>
// //                 <Route path='/farmingqa' element={<FarmingQA/>}/>
// //                 <Route path='/successstories' element={<SuccessStories/>}/>
// //                 <Route path='/marketprices' element={<MarketPrices/>}/>
// //                 <Route path="/events" element={<Events/>} />
// //                 <Route path="*" element={<Navigate to="/feed" />} />
// //               </Routes>
// //             </div>
// //           </>
// //         ) : (
// //           <Routes>
// //             <Route path="/" element={<Login setUser={setUser} />} />
// //             <Route path="/signup" element={<SignUp setUser={setUser} />} />
// //             <Route path="*" element={<Navigate to="/" />} />
// //           </Routes>
// //         )}
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;



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
// import ContactForm from './components/ContactForm';
// import FarmingTips from './components/FarmingTips';
// import FarmingQA from './components/FarmingQA';
// import SuccessStories from './components/SuccessStories';
// import Home from './components/Home';
// import MarketPrices from './components/MarketPrices';
// import Events from './components/Events';


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
//                 <Route path="/farmingtips" element={<FarmingTips />} />
//                 <Route path="/farmingqa" element={<FarmingQA />} />
//                 <Route path="/successstories" element={<SuccessStories />} />
//                 <Route path="/marketprices" element={<MarketPrices />} />
//                 <Route path="/events" element={<Events />} />
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
import axios from 'axios';
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
import Forecast from './components/Forecast';
import SearchEngine from './components/SearchEngine';
import './styles.css';
import './styless.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false
  });
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toDate = () => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
  };

  const searchWeather = async (event) => {
    event.preventDefault();
    if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
      setWeather({ ...weather, loading: true });
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("error", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=Rabat&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

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
                <Route path="/home" element={<Home />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/farmingtips" element={<FarmingTips />} />
                <Route path="/farmingqa" element={<FarmingQA />} />
                <Route path="/successstories" element={<SuccessStories />} />
                <Route path="/marketprices" element={<MarketPrices />} />
                <Route path="/events" element={<Events />} />
                <Route path="/weather" element={
                  <div>
                    <SearchEngine query={query} setQuery={setQuery} search={searchWeather} />
                    {weather.loading && (
                      <>
                        <br />
                        <br />
                        <h4>Searching..</h4>
                      </>
                    )}
                    {weather.error && (
                      <>
                        <br />
                        <br />
                        <span className="error-message">
                          <span style={{ fontFamily: 'Arial' }}>Oops!</span> There was an error fetching the weather data. Please try again later.
                        </span>
                      </>
                    )}
                    {!weather.loading && !weather.error && weather.data && (
                      <Forecast weather={weather} toDate={toDate} />
                    )}
                  </div>
                } />
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
