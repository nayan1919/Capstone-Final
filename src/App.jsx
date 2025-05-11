// Importing React and necessary hooks from React
import React, { useState } from 'react';
// Importing routing utilities from react-router-dom for routing functionality
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// Importing pages and components to render in the routes
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';
import Upload from './pages/Upload';
import CreateChannel from './pages/CreateChannel';
import ChannelPage from './components/ChannelPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// Importing custom styles
import './styles/styles.css';

// Layout component for rendering the common structure of the app, including Header and Sidebar
const Layout = () => {
  // useState hooks for managing state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manages Sidebar visibility
  const [searchQuery, setSearchQuery] = useState(''); // Holds the search query
  const [selectedCategory, setSelectedCategory] = useState(null); // Holds the selected category for filtering

  // Function to toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Rendering Header with the ability to toggle Sidebar and set search query */}
      <Header toggleSidebar={toggleSidebar} setSearchQuery={setSearchQuery} />
      {/* Rendering Sidebar with conditional styling based on whether it is open */}
      <Sidebar isOpen={isSidebarOpen} />
      <div style={{ marginLeft: isSidebarOpen ? '200px' : '0', paddingTop: '60px' }}>
        {/* Outlet is used to render the child routes like Home, Watch, etc. */}
        <Outlet context={{ searchQuery, selectedCategory, setSelectedCategory }} />
      </div>
    </>
  );
};

// Creating the browser router with routes and nested routes
const router = createBrowserRouter([
  {
    path: '/', // Root path, renders Layout component
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Default child route (Home page)
      { path: 'watch/:id', element: <Watch /> }, // Route for watching videos, dynamic :id parameter
      { path: 'channel/create', element: <CreateChannel /> }, // Route for creating a channel
      { path: 'channel/:id', element: <ChannelPage /> }, // Route for viewing a specific channel
      { path: 'upload', element: <Upload /> } // Route for uploading videos
    ]
  },
  {
    path: '/login', // Route for the Login page
    element: <Login />
  },
  {
    path: '/register', // Route for the Register page
    element: <Register />
  }
]);

// Main App component that provides the router to the app
function App() {
  return <RouterProvider router={router} />; // Providing the router to the app
}

export default App;
