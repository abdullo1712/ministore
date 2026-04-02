import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-grid">
          <div>
            <h2 className="newsletter-title">SUBSCRIBE US NOW</h2>
            <p className="newsletter-desc">Get latest news, updates and deals directly mailed to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address here" 
              className="newsletter-input"
              required 
            />
            <button 
              type="submit" 
              className="newsletter-btn"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
