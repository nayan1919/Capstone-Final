# 1. Project Title

YouTube Capstone

# 2. Description

The YouTube Capstone project is a full-stack web application that replicates core functionalities of YouTube, designed as a demo to showcase skills in modern web development. The frontend is built using React.js, providing a dynamic and responsive user interface, while the backend is developed using Node.js and Express.js, with MongoDB as the database for storing video metadata, user data, and interactions. This project demonstrates proficiency in building a scalable, feature-rich video streaming platform with user authentication, video uploads, and playback capabilities.
The application allows users to register, log in, upload videos, view video content, like/dislike videos, comment, and subscribe to channels. The frontend communicates with the backend via RESTful APIs, ensuring a seamless user experience. This project was developed as part of a capstone to apply concepts like component-based architecture, state management, and API integration in a real-world scenario.

# 3. Features

User Authentication: Secure registration and login system using JWT (JSON Web Tokens) for session management.
Video Upload: Users can upload videos, which are stored in the backend (or a cloud service like AWS S3, if implemented) with metadata saved in MongoDB.
Video Playback: Stream videos with a responsive player supporting play, pause, and seek functionalities.
Like/Dislike System: Users can like or dislike videos, with real-time updates to the UI.
Comment Section: Users can post and view comments on videos, with timestamps and user details.
Subscription Model: Users can subscribe to channels to follow content creators.
Search Functionality: Search bar to find videos by title or description.
Responsive Design: Mobile-friendly UI built with CSS frameworks (e.g., Tailwind CSS or Bootstrap) for accessibility across devices.
State Management: Efficient state handling using React hooks (useState, useEffect) or Redux (if implemented).
API Integration: Frontend fetches data from the backend via Axios or Fetch for dynamic content rendering.

# 4. Technologies Used

Frontend

React.js: For building the user interface with reusable components.
React Router: For client-side routing and navigation.
Axios/Fetch: For making HTTP requests to the backend API.
CSS: For styling and responsive design.
React Player: For embedding and controlling video playback (if used).
JavaScript (ES6+): For modern scripting and logic implementation.

Backend

Node.js: For server-side runtime environment.
Express.js: For building RESTful APIs.
MongoDB: For storing user data, video metadata, and interactions.
Mongoose: For MongoDB object modeling.
JWT: For secure authentication.

# 5. Project Setup

Node.js: Version 16.x or higher.
npm: Version 8.x or higher (comes with Node.js).
MongoDB: Local installation or a cloud instance (e.g., MongoDB Compass).
Git: For cloning the repositories.

Frontend Setup

Clone the Frontend Repository:

git clone https://github.com/nayan1919/Capstone-Final.git
cd Capstone-Final

Install Dependencies:

npm install

Configure Environment Variables:

Create a .env file in the root of the frontend directory.

Add the backend API URL:

REACT_APP_API_URL=http://localhost:5000/api

Run the Development Server:

npm start

The app will run on http://localhost:3000 by default.

Backend Setup

Clone the Backend Repository:

git clone https://github.com/nayan1919/Capstone-Final-Backend.git
cd Capstone-Final-Backend

Install Dependencies:

# npm install

Run the Backend Server:

npm start

The server will run on http://localhost:5000 by default.

Database Setup

# 6. Usage

Access the Application:

Open http://localhost:3000 in your browser after starting the frontend and backend servers.

Register/Login:

Create a new account or log in with existing credentials.

Explore Features:

Upload a video via the upload page (if authenticated).
Browse videos on the homepage or use the search bar.
Interact with videos by liking, commenting, or subscribing to channels.

Responsive Testing: Resize the browser or use developer tools to test responsiveness on mobile devices.

# 7. Project Structure

Frontend (Capstone-Final)

Capstone-Final/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/        # Reusable UI components (e.g., Navbar, VideoCard)
│   ├── pages/             # Page components (e.g., Home, VideoPlayer)
│   ├── context/           # Context API for state management (if used)
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── styles/            # CSS or Tailwind styles
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
└── README.md              # This file

Backend (Capstone-Final-Backend)

Capstone-Final-Backend/
├── models/                # Mongoose schemas (e.g., User, Video)
├── routes/                # API routes (e.g., auth, videos)
├── controllers/           # Route handlers
├── middleware/            # Custom middleware (e.g., auth)
├── .env                   # Environment variables
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
└── README.md              # Backend documentation


# 8. Repositories

# Frontend: https://github.com/nayan1919/Capstone-Final
# Backend: https://github.com/nayan1919/Capstone-Final-Backend

