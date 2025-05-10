import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import {
  FaHome, FaFire, FaMusic, FaFilm,
  FaNewspaper, FaUser, FaRegClock, FaUpload,
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <aside className="sidebar">
          <ul>
            <li><FaHome className="icon" /><span className="item-text">Home</span></li>
            <li><FaFire className="icon" /><span className="item-text">Trending</span></li>
            <li><FaMusic className="icon" /><span className="item-text">Music</span></li>
            <li><FaFilm className="icon" /><span className="item-text">Movies</span></li>
            <li><FaNewspaper className="icon" /><span className="item-text">News</span></li>
            <hr />
            <li><FaUser className="icon" /><span className="item-text">You</span></li>
            <li><FaRegClock className="icon" /><span className="item-text">History</span></li>
            <li>
              <Link to="/upload" className="sidebar-link">
                <FaUpload className="icon" />
                <span className="item-text">Upload</span>
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
