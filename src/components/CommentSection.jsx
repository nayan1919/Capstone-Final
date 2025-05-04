import React, { useState } from 'react';
import '../styles/styles.css';

const CommentSection = ({ comments, onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="comment-section">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
      ></textarea>
      <button onClick={handleSubmit}>Post</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;