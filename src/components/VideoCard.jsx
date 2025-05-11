import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video._id}`} className="video-card">
      <img src={video.thumbnailUrl} alt={video.title} />
      <div className="video-info">
        <h4>{video.title}</h4>
        <p>{video.uploader?.username || 'Nayan Dutta'}</p>
        <p>{video.views} views</p>
      </div>
    </Link>
  );
};

export default VideoCard;
