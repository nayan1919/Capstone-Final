import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import '../styles/styles.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        videoId: 'video01',
        title: 'Learn React in 30 Minutes',
        thumbnailUrl: 'https://example.com/thumbnails/react30min.png',
        uploader: 'user01',
        views: 15200,
      },
    ]);
  }, []);

  return (
    <div className="home-page">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;