import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos } from '../store/videoSlice';
import VideoCard from '../components/VideoCard';
import '../styles/styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-page">
      <h2>Recommended Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
