import React, { useState, useEffect, useCallback, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FeedbackAssistant.css';

const FeedbackAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const form = useRef();

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        const isNearTop = currentScrollY < 100;
        
        setIsVisible(isScrollingUp || isNearTop);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Reset visibility when component mounts
    setIsVisible(true);
    lastScrollY.current = window.scrollY;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Close panel when pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_47iflrc',
        'template_tvo4vqn',
        form.current,
        'Lm9-rCpua-WHLbtvm'
      );
      
      setMessage('✅ Feedback sent successfully!');
      setShowMessage(true);
      setSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFeedback('');
        setEmail('');
        setName('');
        setShowMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      setMessage('❌ Failed to send feedback. Please try again.');
      setShowMessage(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={`feedback-assistant ${isVisible ? 'visible' : 'hidden'}`}
      role="complementary"
      aria-label="Feedback form"
    >
      {showMessage && <div className="popup-message">{message}</div>}
      
      {isOpen && (
        <div 
          className="feedback-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-title"
        >
          {!submitted ? (
            <form ref={form} onSubmit={handleSubmit} noValidate>
              <div className="feedback-header">
                <h3 id="feedback-title">Send us your feedback</h3>
                <button 
                  type="button" 
                  className="close-button"
                  onClick={handleClose}
                  aria-label="Close feedback form"
                >
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                </button>
              </div>
              <div className="feedback-content">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    aria-required="true"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Your Message</label>
                  <textarea
                    id="feedback"
                    name="message"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="How can we help you?"
                    rows="4"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={!name || !email || !feedback}
                >
                  <i className="bi bi-send-fill" aria-hidden="true"></i>
                  Send Feedback
                </button>
              </div>
            </form>
          ) : (
            <div 
              className="success-message"
              role="alert"
              aria-live="polite"
            >
              <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
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
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <i className="bi bi-chat-dots-fill" aria-hidden="true"></i>
        <span>Feedback</span>
      </button>
    </div>
  );
};

export default FeedbackAssistant; 