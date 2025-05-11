import React from 'react'; // Importing React to define a functional component
import { Link } from 'react-router-dom'; // Link component allows client-side navigation without refreshing the page
import '../styles/styles.css'; // Importing external styles for styling the sidebar

// Importing icons from react-icons/fa for UI decoration
import {
  FaHome, FaFire, FaMusic, FaFilm,
  FaNewspaper, FaUser, FaRegClock, FaUpload,
} from 'react-icons/fa';

// Sidebar component takes one prop:
// isOpen: a boolean that determines whether the sidebar should be visible
const Sidebar = ({ isOpen }) => {
  return (
    <>
      {/* Sidebar is only rendered if isOpen is true */}
      {isOpen && (
        <aside className="sidebar">
          <ul>
            {/* Navigates to home page when clicked */}
            <li>
              <Link to="/" className="sidebar-link">
                <FaHome className="icon" />
                <span className="item-text">Home</span>
              </Link>
            </li>

            {/* Static list items for UI only — you can later make these functional */}
            <li>
              <FaFire className="icon" />
              <span className="item-text">Trending</span>
            </li>
            <li>
              <FaMusic className="icon" />
              <span className="item-text">Music</span>
            </li>
            <li>
              <FaFilm className="icon" />
              <span className="item-text">Movies</span>
            </li>
            <li>
              <FaNewspaper className="icon" />
              <span className="item-text">News</span>
            </li>

            <hr /> {/* Divider for separating groups */}

            {/* More static list items */}
            <li>
              <FaUser className="icon" />
              <span className="item-text">You</span>
            </li>
            <li>
              <FaRegClock className="icon" />
              <span className="item-text">History</span>
            </li>

            {/* Navigates to the upload page when clicked */}
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
