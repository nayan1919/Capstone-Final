import React, { useState } from 'react';
import '../styles/styles.css';

const CreateChannelModal = ({ isOpen, onClose, onCreate }) => {
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (channelName.trim()) {
      onCreate({ channelName, description });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content upload-form">
        <h2>Create Channel</h2>
        <input
          type="text"
          placeholder="Channel Name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <textarea
          placeholder="Channel Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="upload-btn" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelModal;
