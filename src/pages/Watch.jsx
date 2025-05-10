import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection';
import '../styles/styles.css';

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
      setVideo(res.data);
    };
    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-page">
      <iframe
        className="watch-player"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2 className="watch-title">{video.title}</h2>
      <CommentSection comments={comments} onAdd={(text) => setComments([...comments, { text }])} />
    </div>
  );
};

export default Watch;
