import React, { useState } from 'react';
import './FeedbackAssistant.css';

const FeedbackAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log({ name, email, feedback });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedback('');
      setEmail('');
      setName('');
    }, 3000);
  };

  return (
    <div className="feedback-assistant">
      {isOpen && (
        <div className="feedback-panel">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="feedback-header">
                <h3>Send us your feedback</h3>
                <button 
                  type="button" 
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <div className="feedback-content">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
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
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Your Message</label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="How can we help you?"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <i className="bi bi-send-fill"></i>
                  Send Feedback
                </button>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <i className="bi bi-check-circle-fill"></i>
              <h3>Thank you!</h3>
              <p>We've received your feedback.</p>
            </div>
          )}
        </div>
      )}
      <button 
        className={`feedback-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open feedback form"
      >
        <i className="bi bi-chat-dots-fill"></i>
        <span>Feedback</span>
      </button>
    </div>
  );
};

export default FeedbackAssistant; 