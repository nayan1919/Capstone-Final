import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaBars, FaYoutube } from 'react-icons/fa';
import CreateChannelModal from '../components/CreateChannelModal';
import '../styles/styles.css';

const Header = ({ toggleSidebar, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCreateChannel = (channelData) => {
    console.log("Channel Created:", channelData);
    // You can send POST request to backend here.
  };

  return (
    <>
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

        <div className="right-header">
          <button className="create-channel-btn" onClick={() => setIsModalOpen(true)}>
            Create Channel
          </button>
          <Link to="/login" className="signin-btn">S</Link>
        </div>
      </header>

      <CreateChannelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateChannel}
      />
    </>
  );
};

export default Header;
