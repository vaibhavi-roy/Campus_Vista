import React, { useState } from 'react';
import { AiOutlineRadiusBottomleft } from 'react-icons/ai';

const CommentModal = ({ post, onClose }) => {
  const [comments, setComments] = useState(['Dummy comment 1', 'Dummy comment 2']);
  const [newComment, setNewComment] = useState('');

  // Array of bad words for demonstration purposes
  const badWords = ['abuse', 'cuss','fuck'];

  const addComment = () => {
    if (newComment.trim() !== '') {
      // Replace bad words with asterisks of the same length
      let sanitizedComment = newComment;
      badWords.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        sanitizedComment = sanitizedComment.replace(regex, '*'.repeat(word.length));
      });

      setComments([...comments, sanitizedComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-modal">
      <div className="modal-content">
        <span style={{ marginLeft: '30rem', width: '500px' }} className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Comments for Post {post.id}</h2>
        <ul>
          {comments.map((comment, index) => (
            <li style={{ listStyle: 'none' }} key={index}>
              {comment}
            </li>
          ))}
        </ul>
        <div className="modal-react">
          <textarea
            style={{ width: '80%', padding: '20px', borderRadius: '10px' }}
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div style={{ marginTop: '20px' }}>
            <button style={{ padding: '10px', borderRadius: '10px' }} className="btn" onClick={addComment}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
