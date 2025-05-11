import React, { useState } from 'react';
import '../styles/styles.css';

const CommentSection = ({ comments, onAdd }) => {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText) {
      onAdd(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="comment-section">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
