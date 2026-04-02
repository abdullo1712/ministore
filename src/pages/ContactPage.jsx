import React from 'react';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <PageHeader title="CONTACT" breadcrumb="Contact" />
      
      <div className="container contact-container">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="contact-section-title">CONTACT INFO</h2>
          <p className="contact-desc">
            Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
          </p>
          
          <div className="contact-info-list">
            <div className="contact-info-row">
              <div className="contact-icon"><LuMapPin /></div>
              <div>
                <h3 className="contact-info-heading">Office</h3>
                <p className="contact-info-text">730 Glenstone Ave 65802, Springfield, US</p>
              </div>
            </div>
            
            <div className="contact-info-row">
              <div className="contact-icon"><LuPhone /></div>
              <div>
                <h3 className="contact-info-heading">Management</h3>
                <p className="contact-info-text">+222 111 333 4444</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Questions Form */}
        <div>
          <h2 className="contact-section-title">ANY QUESTIONS?</h2>
          <p className="contact-desc">
            Use the form below to get in touch with us.
          </p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name *" className="contact-input" required />
            <input type="email" placeholder="Your email *" className="contact-input" required />
            <input type="text" placeholder="Subject" className="contact-input" />
            <textarea placeholder="Write your message here *" className="contact-textarea" required></textarea>
            <button className="btn-dark contact-submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default ContactPage;
