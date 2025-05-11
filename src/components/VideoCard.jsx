import React from 'react'; // Import React to define the functional component
import { Link } from 'react-router-dom'; // Link is used for client-side routing without full page reload
import '../styles/styles.css'; // Import external CSS for styling the video card

// The VideoCard component receives a 'video' object as a prop
const VideoCard = ({ video }) => {
  return (
    // Wrap the entire video card in a Link for navigation to the watch page of the specific video
    // Navigates to a dynamic route like /watch/12345 using video._id
    <Link to={`/watch/${video._id}`} className="video-card">
      
      {/* Displays the thumbnail image of the video */}
      <img src={video.thumbnailUrl} alt={video.title} />

      {/* Video information section below the thumbnail */}
      <div className="video-info">
        {/* Displays the title of the video */}
        <h4>{video.title}</h4>

        {/* Displays the uploader's username, or fallback to 'Nayan Dutta' if uploader data is not available */}
        <p>{video.uploader?.username || 'Nayan Dutta'}</p>

        {/* Displays the number of views on the video */}
        <p>{video.views} views</p>
      </div>
    </Link>
  );
};

export default VideoCard; // Exporting the component to use it in other parts of the app (e.g., Home page)
