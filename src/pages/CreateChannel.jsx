// Importing React and useState hook from the react library
import React, { useState } from 'react';

// Importing custom styles for the component
import '../styles/styles.css';

// Define the CreateChannel functional component
const CreateChannel = () => {
  // State to hold the channel name input value
  const [channelName, setChannelName] = useState('');

  // State to hold the channel description input value
  const [description, setDescription] = useState('');

  // Function to handle the "Create" button click
  const handleCreate = () => {
    // Logging the channel data to the console (this can be replaced with an API call)
    console.log('Creating channel:', { channelName, description });
  };

  // Render the form UI
  return (
    <div className="create-channel">
      {/* Heading for the create channel form */}
      <h2>Create Channel</h2>

      {/* Input field to enter channel name */}
      <input
        type="text"
        placeholder="Channel Name" // Placeholder text inside the input
        value={channelName} // Controlled input bound to state
        onChange={(e) => setChannelName(e.target.value)} // Update state on change
      />

      {/* Textarea to enter channel description */}
      <textarea
        placeholder="Description" // Placeholder text inside the textarea
        value={description} // Controlled textarea bound to state
        onChange={(e) => setDescription(e.target.value)} // Update state on change
      ></textarea>

      {/* Button to trigger channel creation */}
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

// Export the component for use in other parts of the application
export default CreateChannel;
