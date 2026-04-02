import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';
import './Navbar.css';

import { LuSearch, LuUser, LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* <div className="top-banner">
        <div className="container top-banner-text">
          FREE SHIPPING ON ALL U.S ORDERS OVER $50 hhhhh
        </div>
      </div> */}

      <nav className="navbar">
        <div className="container navbar-container">

          <div className="navbar-logo-wrap">
            <Link to="/" className="navbar-logo">
              MiniStore<span className="navbar-logo-dot">.</span>
            </Link>
          </div>

          <ul className="navbar-links">
            {['HOME', 'SHOP', 'ABOUT', 'BLOG', 'CONTACT'].map(link => (
              <li key={link}>
                <NavLink
                  to={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
                  className={({ isActive }) => isActive ? 'nav-item-link active' : 'nav-item-link'}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-icons">
            <button className="nav-icon-btn"><LuSearch size={20} /></button>
            <button className="nav-icon-btn" onClick={() => setIsModalOpen(true)}><LuUser size={20} /></button>
            <Link to="/cart" className="nav-cart-link">
              <LuShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="cart-badge">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
