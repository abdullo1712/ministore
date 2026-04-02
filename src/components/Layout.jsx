import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
