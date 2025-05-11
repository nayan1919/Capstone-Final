import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';
import Upload from './pages/Upload';
import CreateChannel from './pages/CreateChannel';
import ChannelPage from './components/ChannelPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/styles.css';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} setSearchQuery={setSearchQuery} />
      <Sidebar isOpen={isSidebarOpen} />
      <div style={{ marginLeft: isSidebarOpen ? '200px' : '0', paddingTop: '60px' }}>
        {/* This renders the child routes like Home, Watch, etc. */}
        <Outlet context={{ searchQuery, selectedCategory, setSelectedCategory }} />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'watch/:id', element: <Watch /> },
      { path: 'channel/create', element: <CreateChannel /> },
      { path: 'channel/:id', element: <ChannelPage /> },
      { path: 'upload', element: <Upload /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
