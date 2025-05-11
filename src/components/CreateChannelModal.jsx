import React, { useState } from 'react'; // Import React and useState for local state management
import '../styles/styles.css'; // Import styles used by the modal

// Component to render a modal for creating a channel
// Props:
// - `isOpen`: Boolean to control whether the modal is shown
// - `onClose`: Function to close the modal
// - `onCreate`: Function to handle the creation logic
const CreateChannelModal = ({ isOpen, onClose, onCreate }) => {
  const [channelName, setChannelName] = useState(''); // State for channel name input
  const [description, setDescription] = useState(''); // State for description input

  // Handles the submission of the form
  const handleSubmit = () => {
    if (channelName.trim()) { // Only proceed if channel name is not empty
      onCreate({ channelName, description }); // Pass input values to parent component
      onClose(); // Close the modal after creation
    }
  };

  // If modal is not open, render nothing (null)
  if (!isOpen) return null;

  return (
    // Overlay that covers the screen
    <div className="modal-overlay">
      {/* Modal content box styled like upload form */}
      <div className="modal-content upload-form">
        <h2>Create Channel</h2>

        {/* Input for channel name */}
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName} // Bind to state
          onChange={(e) => setChannelName(e.target.value)} // Update state on input change
        />

        {/* Textarea for channel description */}
        <textarea
          placeholder="Channel Description"
          value={description} // Bind to state
          onChange={(e) => setDescription(e.target.value)} // Update state on input change
        />

        {/* Button group for cancel and create */}
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button> {/* Close modal */}
          <button className="upload-btn" onClick={handleSubmit}>Create</button> {/* Submit form */}
        </div>
      </div>
    </div>
  );
};

export default CreateChannelModal; // Export component for use in other parts of the app
