// Import necessary modules from React and React Router
import React, { useState } from 'react'; // useState is used for managing form input state
import { useNavigate } from 'react-router-dom'; // useNavigate is used for programmatic navigation
import '../styles/styles.css'; // Importing external CSS file for styling

// Define the Register component
const Register = () => {
  // State to hold the username input value
  const [username, setUsername] = useState('');

  // State to hold the email input value
  const [email, setEmail] = useState('');

  // State to hold the password input value
  const [password, setPassword] = useState('');

  // useNavigate hook to redirect the user after registration
  const navigate = useNavigate();

  // Function to handle register button click
  const handleRegister = async () => {
    // Logging the form data to console (You can replace this with API call)
    console.log('Registering:', { username, email, password });

    // Redirecting the user to the login page after registration
    navigate('/login');
  };

  // JSX that renders the registration form
  return (
    <div className="register-form">
      <h2>Register</h2>

      {/* Username input field */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Updates state when input changes
      />

      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Updates state when input changes
      />

      {/* Password input field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Updates state when input changes
      />

      {/* Register button */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

// Export the Register component so it can be used in routes
export default Register;
