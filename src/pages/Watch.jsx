import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection';
import '../styles/styles.css';

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setVideo({ videoUrl: 'https://example.com/video.mp4', title: 'Sample Video' });
    setComments([{ text: 'Nice video!' }]);
  }, [id]);

  const handleAddComment = (text) => {
    setComments([...comments, { text }]);
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-page">
      <h2>{video.title}</h2>
      <VideoPlayer videoUrl={video.videoUrl} />
      <CommentSection comments={comments} onAdd={handleAddComment} />
    </div>
  );
};

export default Watch;