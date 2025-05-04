import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';
import CreateChannel from './pages/CreateChannel';
import ChannelPage from './components/ChannelPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/styles.css';

const Layout = () => (
  <>
    <Header />
    <Sidebar />
    <div style={{ marginLeft: '200px', paddingTop: '60px' }}>
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'watch/:id', element: <Watch /> },
      { path: 'channel/create', element: <CreateChannel /> },
      { path: 'channel/:id', element: <ChannelPage /> }
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
