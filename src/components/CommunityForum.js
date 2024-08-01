
import React, { useState } from 'react';
import './CommunityForum.css';


const ForumPost = ({ post }) => {
  return (
    <div className="forum-post">
      <div className="post-header">
        <h2>{post.author}</h2>
        <span>{post.date}</span>
      </div>
      <p>{post.content}</p>
    </div>
  );
};

// NewPostForm Component
const NewPostForm = ({ addPost }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      author,
      content,
      date: new Date().toISOString().split('T')[0],
    };
    addPost(newPost);
    setAuthor('');
    setContent('');
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

// CommunityForum Component
const CommunityForum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      content: 'This is a sample forum post.',
      date: '2024-07-27',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Another interesting discussion topic!',
      date: '2024-07-26',
    },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="community-forum">
      <h1>Community Forum</h1>
      <NewPostForm addPost={addPost} />
      <div className="forum-posts">
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;



// CommunityForum.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaCog, FaHome, FaUser, FaLeaf, FaCloudSun, FaLightbulb, FaCalendarAlt, FaDollarSign, FaBook, FaStar, FaComments, FaHandshake } from 'react-icons/fa';
// import './CommunityForum.css';

// const DiscussionBoards = () => {
//   return (
//     <div className="discussion-boards">
//       <h2>Discussion Boards</h2>
//       <div className="board-list">
//         <Link to="/discussions/agriculture">Agriculture</Link>
//         <Link to="/discussions/crops">Crops</Link>
//         <Link to="/discussions/livestock">Livestock</Link>
//         <Link to="/discussions/techniques">Farming Techniques</Link>
//         <Link to="/discussions/market">Market Trends</Link>
//       </div>
//     </div>
//   );
// };

// const UserProfiles = () => {
//   const users = [
//     { id: 1, name: 'John Doe', contributions: 25, img: 'https://via.placeholder.com/80' },
//     { id: 2, name: 'Jane Smith', contributions: 18, img: 'https://via.placeholder.com/80' },
//     { id: 3, name: 'Alice Johnson', contributions: 30, img: 'https://via.placeholder.com/80' },
//     { id: 4, name: 'Bob Brown', contributions: 22, img: 'https://via.placeholder.com/80' }
//   ];

//   return (
//     <div className="user-profiles">
//       <h2>User Profiles</h2>
//       <div className="profile-list">
//         {users.map(user => (
//           <div key={user.id} className="profile-card">
//             <img src={user.img} alt={user.name} />
//             <h3>{user.name}</h3>
//             <p>Contributions: {user.contributions}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ModerationTools = () => {
//   return (
//     <div className="moderation-tools">
//       <h2>Moderation Tools</h2>
//       <button>View Reports</button>
//       <button>Manage Users</button>
//       <button>Block Content</button>
//     </div>
//   );
// };

// const ForumPost = ({ post }) => {
//   return (
//     <div className="forum-post">
//       <div className="post-header">
//         <h2>{post.author}</h2>
//         <span>{post.date}</span>
//       </div>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// const NewPostForm = ({ addPost }) => {
//   const [author, setAuthor] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPost = {
//       id: Date.now(),
//       author,
//       content,
//       date: new Date().toISOString().split('T')[0],
//     };
//     addPost(newPost);
//     setAuthor('');
//     setContent('');
//   };

//   return (
//     <form className="new-post-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Write your post here..."
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//       ></textarea>
//       <button type="submit">Post</button>
//     </form>
//   );
// };

// const CommunityForum = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       author: 'John Doe',
//       content: 'This is a sample forum post about modern farming techniques.',
//       date: '2024-07-27',
//     },
//     {
//       id: 2,
//       author: 'Jane Smith',
//       content: 'Here is a discussion on the latest market trends in agriculture!',
//       date: '2024-07-26',
//     },
//     {
//       id: 3,
//       author: 'Alice Johnson',
//       content: 'Looking for advice on livestock management and best practices.',
//       date: '2024-07-25',
//     },
//   ]);

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const addPost = (post) => {
//     setPosts([post, ...posts]);
//   };

//   return (
//     <div className="community-forum">
//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <div className="toggle-button" onClick={toggleSidebar}>
//           {sidebarOpen ? <FaTimes /> : <FaBars />}
//         </div>
//         <Link to="/" className="sidebar-item"><FaHome className="icon" /> Home</Link>
//         <Link to="/profile" className="sidebar-item"><FaUser className="icon" /> Profile</Link>
//         <Link to="/settings" className="sidebar-item"><FaCog className="icon" /> Settings</Link>
//         <Link to="/discussion-boards" className="sidebar-item"><FaComments className="icon" /> Discussion Boards</Link>
//         <Link to="/moderation-tools" className="sidebar-item"><FaCog className="icon" /> Moderation Tools</Link>
//         <Link to="/subscriptions" className="sidebar-item"><FaLeaf className="icon" /> Subscriptions</Link>
//         <Link to="/community" className="sidebar-item"><FaCloudSun className="icon" /> Community</Link>
//         <Link to="/meetings" className="sidebar-item"><FaCalendarAlt className="icon" /> Meetings</Link>
//         <Link to="/investment" className="sidebar-item"><FaDollarSign className="icon" /> Investment</Link>
//         <Link to="/resources" className="sidebar-item"><FaBook className="icon" /> Resources</Link>
//         <Link to="/feedback" className="sidebar-item"><FaStar className="icon" /> Feedback</Link>
//       </div>
//       <div className="main-content">
//         <h1>Community Forum</h1>
//         <NewPostForm addPost={addPost} />
//         {posts.map(post => (
//           <ForumPost key={post.id} post={post} />
//         ))}
//         <DiscussionBoards />
//         <UserProfiles />
//         <ModerationTools />
//       </div>
//     </div>
//   );
// };

// export default CommunityForum;



// import React from 'react';
// import './CommunityForum.css';

// const CommunityForum = () => {
//   const posts = [
//     {
//       user: 'Jeanne Dimmick',
//       category: 'Share your videoask',
//       question: 'Videoask Widget is overlaid with next Videoask Widget - how to dismiss first?',
//       details: 'I have added a Videoask widget to the bottom of my page - the little circular one that pops out from the corner of the page. Then I added one on the next page. And the next. I did a...',
//       likes: 1,
//       comments: 1,
//       time: '3 hours ago',
//     },
//     {
//       user: 'domanyek',
//       category: 'Build your typeform',
//       question: 'Decimals',
//       details: 'I am unable to have decimal number input when I set it up as number input only. Any tips?',
//       likes: 0,
//       comments: 0,
//       time: '9 hours ago',
//     },
//     {
//       user: 'mimi38',
//       category: 'Manage your Typeform account',
//       question: 'How can I refund and cancel a subscription I got just now? It was a mistake and now my bank account is almost empty!',
//       details: 'I was trying to register for a one month only subscription because I would only use Typeform for 1 WEEK. I used Typeform before (2018) and the basic monthly subscription was also...',
//       likes: 2,
//       comments: 45,
//       time: '9 hours ago',
//     },
//     {
//       user: 'CaseyT',
//       category: 'Build your typeform',
//       question: 'Pop Up attached to custom button (which is an image)',
//       details: 'Hi friends! I have created my own website and my menu buttons are essentially images. I created a pop-up form for kids to sign up to our free birthday club, and I need to attach it...',
//       likes: 0,
//       comments: 0,
//       time: '10 hours ago',
//     },
//   ];

//   const topCreators = [
//     { name: 'john.desborough', points: 299 },
//     { name: 'Ibrahim masudi', points: 117 },
//     { name: 'nam.th', points: 96 },
//     { name: 'Darnell', points: 93 },
//     { name: 'mathio', points: 88 },
//     { name: 'christinenglish', points: 60 },
//     { name: 'okdascham', points: 51 },
//     { name: 'sairam natarajan', points: 49 },
//   ];

//   return (
//     <div className="community-forum">
//       <div className="main-content">
//         <h1>Conversations</h1>
//         <h2>Help others</h2>
//         <h2>Categories</h2>
//         {posts.map((post, index) => (
//           <div className="post" key={index}>
//             <h3>{post.question}</h3>
//             <p className="user">Asked by {post.user} in {post.category}</p>
//             <p className="details">{post.details}</p>
//             <div className="post-footer">
//               <span className="likes">👍 {post.likes}</span>
//               <span className="comments">💬 {post.comments}</span>
//               <span className="time">{post.time}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="sidebar">
//         <div className="feedback">
//           <h3>Hey! How's it going?</h3>
//           <button>Tell us what's new with you</button>
//         </div>
//         <div className="top-creators">
//           <h3>Top creators</h3>
//           <ul>
//             {topCreators.map((creator, index) => (
//               <li key={index}>
//                 {index + 1}. {creator.name} - {creator.points} points
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityForum;