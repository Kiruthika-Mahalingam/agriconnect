/*
import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
                                <label htmlFor="phoneNo">Phone No</label>
                                <input type="tel" id="phoneNo" name="phoneNo" />
                            </div>
        <div className="form-group">
          <label htmlFor="message">Feedback</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Suggestion</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
*/


import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { name, email, phoneNo, feedbackMessage, suggestion });
    setName('');
    setEmail('');
    setPhoneNo('');
    setFeedbackMessage('');
    setSuggestion('');
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedbackMessage">Feedback Message</label>
          <textarea
            id="feedbackMessage"
            value={feedbackMessage}
            onChange={(e) => setFeedbackMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="suggestion">Suggestions</label>
          <textarea
            id="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
