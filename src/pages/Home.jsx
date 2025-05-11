// Importing necessary React hooks and libraries
import React, { useEffect, useState } from 'react'; // useEffect for lifecycle method, useState for state management
import axios from 'axios'; // Used to make HTTP requests to the backend
import VideoCard from '../components/VideoCard'; // Component to display individual video
import Categories from '../components/Categories'; // Component to display category filter
import { useOutletContext } from 'react-router-dom'; // Used to access context values passed from parent route
import '../styles/styles.css'; // Importing custom styles

// Define the Home component
const Home = () => {
  // Destructuring values from the outlet context, coming from parent route (like layout)
  const { searchQuery, selectedCategory, setSelectedCategory } = useOutletContext();

  // State to store fetched videos
  const [videos, setVideos] = useState([]);

  // Loading state to show a loading message until videos are fetched
  const [loading, setLoading] = useState(true);

  // Error state to store any error message if fetching fails
  const [error, setError] = useState(null);

  // useEffect runs once when the component mounts (empty dependency array)
  useEffect(() => {
    // Function to fetch videos from backend API
    const fetchVideos = async () => {
      try {
        // Sending GET request to backend API endpoint
        const res = await axios.get('http://localhost:5000/api/videos');

        // Setting the fetched videos in state
        setVideos(res.data);

        // Stop loading once data is fetched
        setLoading(false);
      } catch (err) {
        // Set error message if request fails
        setError(err.message || 'Failed to fetch videos');

        // Stop loading even on error
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchVideos();
  }, []); // Runs only once on component mount

  // Filter videos based on search query and selected category
  const filteredVideos = videos.filter((video) => {
    // Check if video title includes the search query (case insensitive)
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Check if video matches the selected category (if any)
    const matchesCategory = selectedCategory ? video.category === selectedCategory : true;

    // Return true only if both conditions are met
    return matchesSearch && matchesCategory;
  });

  // Display loading text while data is being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if any error occurred
  if (error) return <p>Error: {error}</p>;

  // Render the actual page
  return (
    <div className="home-page">
      {/* Render Categories component and pass down setSelectedCategory */}
      <Categories setSelectedCategory={setSelectedCategory} />

      {/* Display the list of filtered videos */}
      <div className="video-grid">
        {filteredVideos.map((video) => (
          // Render each video using VideoCard component
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

// Exporting the Home component for use in routes
export default Home;
