// Import necessary dependencies
import React, { useState } from 'react'; // For managing form state
import { useNavigate } from 'react-router-dom'; // For navigating to another page after upload
import axios from '../api/axios'; // Custom axios instance for making API requests
import '../styles/styles.css'; // External CSS for styling

// Upload component
const Upload = () => {
  const navigate = useNavigate(); // Hook to navigate after successful upload

  // Initial form data state
  const [formData, setFormData] = useState({
    title: '',
    thumbnailUrl: '',
    videoUrl: '',
    description: '',
    channelId: '', // Optional field
  });

  // Function to update form data when input values change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle the upload process
  const handleUpload = async () => {
    try {
      // Retrieve JWT token from localStorage
      const token = localStorage.getItem('token');

      // Send POST request to backend to upload video
      const res = await axios.post(
        '/videos',
        {
          ...formData,
          views: 0,
          likes: 0,
          dislikes: 0,
          uploadDate: new Date(), // Add current upload timestamp
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token for protected route
          },
        }
      );

      // Log the response and navigate to home page
      console.log('Uploaded:', res.data);
      navigate('/');
    } catch (err) {
      // Log and display any errors encountered during upload
      console.error('Upload failed:', err.response?.data || err.message);
    }
  };

  // JSX UI for the upload form
  return (
    <div className="upload-container">
      <h2 className="upload-title">🎥 Upload a New Video</h2>
      <div className="upload-form">
        {/* Input field for video title */}
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={formData.title}
          onChange={handleChange}
        />

        {/* Input field for thumbnail URL */}
        <input
          type="text"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          value={formData.thumbnailUrl}
          onChange={handleChange}
        />

        {/* Input field for video URL */}
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={handleChange}
        />

        {/* Textarea for video description */}
        <textarea
          name="description"
          placeholder="Video Description"
          value={formData.description}
          onChange={handleChange}
        />

        {/* Input for optional channel ID */}
        <input
          type="text"
          name="channelId"
          placeholder="Channel ID (optional)"
          value={formData.channelId}
          onChange={handleChange}
        />

        {/* Upload button */}
        <button className="upload-btn" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

// Export the component so it can be used in routes
export default Upload;
