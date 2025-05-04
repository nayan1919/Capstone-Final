import React, { useState } from 'react';
import '../styles/styles.css';

const CreateChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    console.log('Creating channel:', { channelName, description });
  };

  return (
    <div className="create-channel">
      <h2>Create Channel</h2>
      <input
        type="text"
        placeholder="Channel Name"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateChannel;