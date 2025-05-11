import React, { useState } from 'react'; // Import React and useState hook
import '../styles/styles.css'; // Import global or component-specific styles

// Functional component to render a comment section
// Accepts two props:
// - `comments`: array of comment objects
// - `onAdd`: function to add a new comment
const CommentSection = ({ comments, onAdd }) => {
  const [commentText, setCommentText] = useState(''); // Local state to hold the current input text

  // Function to handle adding a comment
  const handleAddComment = () => {
    if (commentText) { // Only add if comment text is not empty
      onAdd(commentText); // Call the parent-provided `onAdd` function with the comment text
      setCommentText(''); // Clear the input after adding
    }
  };

  return (
    <div className="comment-section"> {/* Wrapper div for comment UI */}
      <textarea
        value={commentText} // Bind textarea to commentText state
        onChange={(e) => setCommentText(e.target.value)} // Update state on input change
        placeholder="Add a comment" // Placeholder for guidance
      />
      <button onClick={handleAddComment}>Comment</button> {/* Trigger comment add on click */}

      <ul> {/* Render the list of comments */}
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li> // Display each comment, using index as a key
        ))}
      </ul>
    </div>
  );
};

export default CommentSection; // Export the component to use in Watch.jsx or other components
