import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import './Community.css';

const Community = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  const handleInputChange = (e) => {
    setNewThought(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newThought.trim()) {
      setThoughts([...thoughts, { id: Date.now(), content: newThought, likes: 0, comments: [] }]);
      setNewThought('');
    }
  };

  const handleLike = (id) => {
    setThoughts(
      thoughts.map((thought) =>
        thought.id === id ? { ...thought, likes: thought.likes + 1 } : thought
      )
    );
  };

  const handleComment = (id, comment) => {
    setThoughts(
      thoughts.map((thought) =>
        thought.id === id ? { ...thought, comments: [...thought.comments, comment] } : thought
      )
    );
  };

  return (
    <div className="community-page">
      <h1>Team Community Page</h1>
      <form onSubmit={handleFormSubmit} className="thought-form">
        <input
          type="text"
          value={newThought}
          onChange={handleInputChange}
          placeholder="Share your thoughts..."
        />
        <button type="submit">Post</button>
      </form>
      <div className="thoughts-container">
        {thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
            <p>{thought.content}</p>
            <div className="thought-actions">
              <button onClick={() => handleLike(thought.id)} className="action-btn">
                <FaThumbsUp /> {thought.likes}
              </button>
              <button onClick={() => handleComment(thought.id, prompt('Enter your comment'))} className="action-btn">
                <FaComment /> Comment
              </button>
            </div>
            <div className="comments">
              {thought.comments.map((comment, index) => (
                <p key={index} className="comment">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;



