import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaBars, FaYoutube } from 'react-icons/fa';
import '../styles/styles.css';

const Header = ({ toggleSidebar, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="left-header">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars size={20} className="hamburger-icon" />
        </div>
        <div className="logo">
          <FaYoutube className="youtube-icon" />
          <span> YouTube <sup className='sup'>IN</sup></span>
        </div>
      </div>
      <div className="center-header">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          onChange={handleSearchChange}
        />
        <button className="mic-btn"><FaMicrophone /></button>
      </div>
      <Link to="/login" className="signin-btn">S</Link>
    </header>
  );
};

export default Header;
