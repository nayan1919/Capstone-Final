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
        thumbnailUrl: 'https://via.placeholder.com/300x180?text=React+30+Min',
        uploader: 'DevNayan',
        views: 15200,
      },
      {
        videoId: 'video02',
        title: 'Redux Toolkit Crash Course',
        thumbnailUrl: 'https://via.placeholder.com/300x180?text=Redux+Crash',
        uploader: 'TechGuru',
        views: 23700,
      },
      {
        videoId: 'video03',
        title: 'Tailwind CSS Quick Guide',
        thumbnailUrl: 'https://via.placeholder.com/300x180?text=Tailwind+CSS',
        uploader: 'CodeWizard',
        views: 18900,
      },
    ]);
  }, []);

  return (
    <div className="home-page">
      <h2>Recommended Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
