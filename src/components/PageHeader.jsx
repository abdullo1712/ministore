import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header-title">
          {title}
        </h1>
        <div className="page-header-breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span>/</span>
          <span className="breadcrumb-current">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
