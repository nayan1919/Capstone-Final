import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../styles/styles.css';

const Upload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    thumbnailUrl: '',
    videoUrl: '',
    description: '',
    channelId: '', // Optional unless needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.post('/videos', {
        ...formData,
        views: 0,
        likes: 0,
        dislikes: 0,
        uploadDate: new Date(),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Uploaded:', res.data);
      navigate('/');
    } catch (err) {
      console.error('Upload failed:', err.response?.data || err.message);
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload Video</h2>
      <input
        type="text"
        name="title"
        placeholder="Video Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="thumbnailUrl"
        placeholder="Thumbnail URL"
        value={formData.thumbnailUrl}
        onChange={handleChange}
      />
      <input
        type="text"
        name="videoUrl"
        placeholder="Video URL"
        value={formData.videoUrl}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Video Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="channelId"
        placeholder="Channel ID (optional)"
        value={formData.channelId}
        onChange={handleChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
