import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// SVG Icons for Social Media
const SocialIcons = {
  fb: <FaFacebookF size={18} />,
  ig: <FaInstagram size={18} />,
  tw: <FaTwitter size={18} />,
  li: <FaLinkedinIn size={18} />,
  yt: <FaYoutube size={18} />
};

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1 */}
          <div>
            <div className="footer-logo">
              MiniStore<span className="footer-logo-dot">.</span>
            </div>
            <p className="footer-desc">
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">{SocialIcons.fb}</a>
              <a href="#" className="footer-social-link">{SocialIcons.ig}</a>
              <a href="#" className="footer-social-link">{SocialIcons.tw}</a>
              <a href="#" className="footer-social-link">{SocialIcons.li}</a>
              <a href="#" className="footer-social-link">{SocialIcons.yt}</a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-link-list">
              <li><Link to="/" className={`footer-link-item ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link></li>
              <li><Link to="/about" className="footer-link-item">ABOUT</Link></li>
              <li><Link to="/shop" className="footer-link-item">SHOP</Link></li>
              <li><Link to="/blog" className="footer-link-item">BLOGS</Link></li>
              <li><Link to="/contact" className="footer-link-item">CONTACT</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="footer-heading">HELP & INFO</h4>
            <ul className="footer-link-list">
              <li><Link to="#" className="footer-link-item">TRACK YOUR ORDER</Link></li>
              <li><Link to="#" className="footer-link-item">RETURNS POLICIES</Link></li>
              <li><Link to="#" className="footer-link-item">SHIPPING + DELIVERY</Link></li>
              <li><Link to="/contact" className="footer-link-item">CONTACT US</Link></li>
              <li><Link to="#" className="footer-link-item">FAQS</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="footer-heading">CONTACT US</h4>
            <p className="footer-contact-text">Do you have any queries or suggestions?</p>
            <a href="mailto:yourinfo@gmail.com" className="footer-contact-link">yourinfo@gmail.com</a>

            <p className="footer-contact-text-mt">If you need support? Just give us a call.</p>
            <a href="tel:+5511122233344" className="footer-phone">+55 111 222 333 44</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
          </div>

            <div className="footer-bottom-right">
              © Copyright 2023 MiniStore. Design by <a href="#">TemplatesJungle</a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
