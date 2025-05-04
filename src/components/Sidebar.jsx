import React, { useState } from 'react';
import '../styles/styles.css';
import {
  FaBars,
  FaHome,
  FaFire,
  FaRegClock,
  FaUser,
  FaMusic,
  FaFilm,
  FaNewspaper
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>
      {isOpen && (
        <aside className="sidebar">
          <ul>
            <li><FaHome className="icon"/> <span className="item-text">Home</span></li>
            <li><FaFire className="icon"/> <span className="item-text">Trending</span></li>
            <li><FaMusic className="icon"/> <span className="item-text">Music</span></li>
            <li><FaFilm className="icon"/> <span className="item-text">Movies</span></li>
            <li><FaNewspaper className="icon"/> <span className="item-text">News</span></li>
            <hr />
            <li><FaUser className="icon"/> <span className="item-text">You</span></li>
            <li><FaRegClock className="icon"/> <span className="item-text">History</span></li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
