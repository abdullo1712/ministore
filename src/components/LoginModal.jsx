import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false); // start with Register by default based on user request

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className="modal-title">{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          {!isLogin && (
            <div className="modal-form-group">
              <input type="text" placeholder="Full Name" className="modal-input" required />
            </div>
          )}
          <div className="modal-form-group">
            <input type="email" placeholder="Email Address" className="modal-input" required />
          </div>
          <div className="modal-form-group">
            <input type="password" placeholder="Password" className="modal-input" required />
          </div>
          
          <button type="submit" className="modal-btn">
            {isLogin ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </form>

        <div className="modal-footer">
          {isLogin ? (
            <>Don't have an account? <span className="modal-toggle-link" onClick={() => setIsLogin(false)}>Register</span></>
          ) : (
            <>Already have an account? <span className="modal-toggle-link" onClick={() => setIsLogin(true)}>Login</span></>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
