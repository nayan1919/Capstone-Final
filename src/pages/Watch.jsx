// Import required libraries and components
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the video ID from the URL
import axios from 'axios'; // For making API requests
import VideoPlayer from '../components/VideoPlayer'; // Component to play the video
import CommentSection from '../components/CommentSection'; // Component to display comments
import '../styles/styles.css'; // Import global styles

const Watch = () => {
  const { id } = useParams(); // Extract video ID from URL
  const [video, setVideo] = useState(null); // State for the current video
  const [comments, setComments] = useState([]); // State for comments (static in this case)
  const [relatedVideos, setRelatedVideos] = useState([]); // State for suggested videos

  // Fetch video and related videos when component mounts or ID changes
  useEffect(() => {
    // Fetch specific video by ID
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error('Failed to fetch video:', err);
      }
    };

    // Fetch all videos and exclude current video to display as related
    const fetchRelated = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos`);
        setRelatedVideos(res.data.filter((v) => v._id !== id)); // Remove current video
      } catch (err) {
        console.error('Failed to fetch related videos:', err);
      }
    };

    fetchVideo();
    fetchRelated();
  }, [id]);

  // Display loading state while video is being fetched
  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-container">
      {/* Main video and description section */}
      <div className="watch-main">
        {/* Video player */}
        <VideoPlayer videoUrl={video.videoUrl} />

        {/* Video title and description */}
        <h2 className="watch-title">{video.title}</h2>
        <p className="watch-description">{video.description}</p>

        {/* Channel information */}
        <h4 className="channel-name">
          Channel: {video.channelName || video?.uploader?.username}
        </h4>

        {/* Like/Dislike buttons (static for now) */}
        <div className="like-dislike">
          <button>👍 Like</button>
          <button>👎 Dislike</button>
        </div>

        {/* Comments section with dummy add functionality */}
        <CommentSection
          comments={comments}
          onAdd={(text) => setComments([...comments, { text }])}
        />
      </div>

      {/* Sidebar for related videos */}
      <div className="watch-sidebar">
        <h3>Related Videos</h3>
        {relatedVideos.map((vid) => (
          <div key={vid._id} className="related-video-card">
            <img
              src={vid.thumbnailUrl}
              alt={vid.title}
              className="related-thumb"
            />
            <div className="related-info">
              <h4>{vid.title}</h4>
              <p>{vid.channelName || vid?.uploader?.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
