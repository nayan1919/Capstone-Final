import React, { useState } from 'react'; // Import React and the useState hook
import { Link } from 'react-router-dom'; // Link is used for client-side navigation
import { FaMicrophone, FaBars, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import CreateChannelModal from '../components/CreateChannelModal'; // Import the CreateChannelModal component
import '../styles/styles.css'; // Import global or component styles

// The Header component accepts props:
// - toggleSidebar: function to toggle the sidebar open/closed
// - setSearchQuery: function to update the global search input state
const Header = ({ toggleSidebar, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls visibility of the Create Channel modal

  // Updates the parent component with the current search input value
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // This function is called after the user creates a new channel
  const handleCreateChannel = (channelData) => {
    console.log("Channel Created:", channelData); // You could POST this data to a backend here
  };

  return (
    <>
      {/* Header bar */}
      <header className="header">
        {/* Left side: Hamburger and logo */}
        <div className="left-header">
          {/* Button to toggle sidebar visibility */}
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <FaBars size={20} className="hamburger-icon" />
          </div>

          {/* YouTube logo and branding */}
          <div className="logo">
            <FaYoutube className="youtube-icon" />
            <span> YouTube <sup className='sup'>IN</sup></span>
          </div>
        </div>

        {/* Center: Search bar and mic button */}
        <div className="center-header">
          {/* Input field for searching */}
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            onChange={handleSearchChange}
          />
          {/* Microphone icon button (could be used for voice search) */}
          <button className="mic-btn"><FaMicrophone /></button>
        </div>

        {/* Right side: Create channel and Sign In button */}
        <div className="right-header">
          {/* Button to open modal for creating a new channel */}
          <button className="create-channel-btn" onClick={() => setIsModalOpen(true)}>
            Create Channel
          </button>

          {/* Redirects to login page when clicked */}
          <Link to="/login" className="signin-btn">S</Link>
        </div>
      </header>

      {/* Modal that appears when Create Channel button is clicked */}
      <CreateChannelModal
        isOpen={isModalOpen} // Boolean to control whether modal is shown
        onClose={() => setIsModalOpen(false)} // Function to close the modal
        onCreate={handleCreateChannel} // Function to handle channel creation
      />
    </>
  );
};

export default Header;
