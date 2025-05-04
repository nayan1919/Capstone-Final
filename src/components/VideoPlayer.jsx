import React from 'react';
import '../styles/styles.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <video src={videoUrl} controls width="100%" />
    </div>
  );
};

export default VideoPlayer;