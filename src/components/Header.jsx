import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import '../styles/styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-header">
        <div className="logo">YouTube</div>
      </div>
      <div className="center-header">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="mic-btn"><FaMicrophone /></button>
      </div>
      <Link to="/login" className="signin-btn">Sign In</Link>
    </header>
  );
};

export default Header;
