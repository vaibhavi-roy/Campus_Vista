// Community.js

import React, { useState } from 'react';
import './Community.css'; // Import the CSS file
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa'; // Import icons
import CommentModal from './CommentModal'; // Create CommentModal component
import LikeButton from './LikeButton';

const Community = () => {
  const [filter, setFilter] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const communityPosts = [
    { id: 1, category: 'Lost and Found', content: 'Lost my keys near the library.', tags: ['lost', 'keys', 'library','my','near','the'] },
    { id: 2, category: 'Doubts', content: 'Can someone help me with math problems?', tags: ['doubts', 'math','Can','someone','help','me','with','problems'] },
    { id: 3, category: 'Freshers', content: 'Excited to join the college this semester!', tags: ['freshers', 'college','semester','Excited','to','join','the','this'] },
 
  ];

  const filteredPosts = communityPosts.filter((post) => {
    const containsKeyword = post.tags.some(tag => tag.toLowerCase().includes(searchKeyword.toLowerCase()));
    if (filter === 'all') {
      return containsKeyword;
    }
    return post.category.toLowerCase() === filter && containsKeyword;
  });

  const openCommentModal = (post) => {
    setSelectedPost(post);
    setShowCommentModal(true);
  };

  return (
    <div className="community-container">
      <h2>Community</h2>
      <p>Connect with fellow students and share your thoughts and questions!</p>

     

      <input
        type="text"
        placeholder="Search by keyword"
        value={searchKeyword}style={{padding:'20px',borderRadius:'10px',marginBottom:'10px'}}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
       <div className="filter-buttons">
      <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'lost and found' ? 'active' : ''}
          onClick={() => setFilter('lost and found')}
        >
          Lost and Found
        </button>
        <button
          className={filter === 'doubts' ? 'active' : ''}
          onClick={() => setFilter('doubts')}
        >
          Doubts
        </button>
        <button
          className={filter === 'freshers' ? 'active' : ''}
          onClick={() => setFilter('freshers')}
        >
          Freshers
        </button>
      </div>

      <div className="community-posts">
        {filteredPosts.map((post) => (
          <div className="community-post" key={post.id}>
            <p>{post.content}</p>
            <div className="post-icons">
            <LikeButton  />
              <FaComment className="icon" onClick={() => openCommentModal(post)} />
            </div>
          </div>
        ))}
      </div>

      {showCommentModal && (
        <CommentModal
          post={selectedPost}
          onClose={() => {
            setSelectedPost(null);
            setShowCommentModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Community;
