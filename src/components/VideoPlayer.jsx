import React from 'react'; // Importing React to define a functional component
import '../styles/styles.css'; // Importing the CSS file for styling the video player

// VideoPlayer is a reusable functional component that takes `videoUrl` as a prop
const VideoPlayer = ({ videoUrl }) => {
  return (
    // Wrapper div with a class name for applying custom styles from CSS
    <div className="video-player">
      {/* 
        HTML5 <video> element to play the video 
        - src: takes the video URL passed via props
        - controls: adds default video controls (play, pause, volume, etc.)
        - width="100%": makes the video responsive to the container's width
      */}
      <video src={videoUrl} controls width="100%" />
    </div>
  );
};

export default VideoPlayer; // Exporting the component so it can be used elsewhere, like in the Watch page
