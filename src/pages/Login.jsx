// Import necessary modules and hooks from React and React Router
import React, { useState } from 'react'; // useState is used for form input state
import { useNavigate } from 'react-router-dom'; // useNavigate is used to programmatically redirect after login
import axios from '../api/axios'; // Importing the custom axios instance to handle API requests
import '../styles/styles.css'; // Importing external CSS styles

// Define the Login component
const Login = () => {
  // State for email input
  const [email, setEmail] = useState('');

  // State for password input
  const [password, setPassword] = useState('');

  // Hook to navigate to another page after login
  const navigate = useNavigate();

  // Function to handle login action when button is clicked
  const handleLogin = async () => {
    try {
      // Sending POST request to /auth/login with email and password
      const res = await axios.post('/auth/login', { email, password });

      // If login is successful, store the JWT token in localStorage
      localStorage.setItem('token', res.data.token);

      // Optional success message in console
      console.log('Login successful!');

      // Redirect to home page after successful login
      navigate('/');
    } catch (err) {
      // Catch and handle errors (e.g., wrong credentials or network issues)
      console.error('Login failed:', err.response?.data || err.message);

      // Alert user if login fails
      alert('Login failed! Check your credentials.');
    }
  };

  // JSX for login form
  return (
    <div className="login-form">
      <h2>Login</h2>

      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state on change
      />

      {/* Password input field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state on change
      />

      {/* Login button triggers handleLogin function */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Exporting the Login component so it can be used in routes
export default Login;
