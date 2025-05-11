import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection';
import '../styles/styles.css'; // Your global styles

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchRelated = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos`); // fetch all
        setRelatedVideos(res.data.filter(v => v._id !== id)); // exclude current
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideo();
    fetchRelated();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-container">
      <div className="watch-main">
        <VideoPlayer videoUrl={video.videoUrl} />
        <h2 className="watch-title">{video.title}</h2>
        <p className="watch-description">{video.description}</p>
        <h4 className="channel-name">Channel: {video.channelName || video?.uploader?.username}</h4>
        <div className="like-dislike">
          <button>👍 Like</button>
          <button>👎 Dislike</button>
        </div>
        <CommentSection comments={comments} onAdd={(text) => setComments([...comments, { text }])} />
      </div>

      <div className="watch-sidebar">
        <h3>Related Videos</h3>
        {relatedVideos.map((vid) => (
          <div key={vid._id} className="related-video-card">
            <img src={vid.thumbnailUrl} alt={vid.title} className="related-thumb" />
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
