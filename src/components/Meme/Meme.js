import React, { useState } from 'react';
import './Meme.css'; // Create a CSS file for styling
import meme1 from '../../images/meme1.jpeg';
import meme2 from '../../images/meme2.jpeg';
import VoiceNavigationApp from '../VoiceNavigation';
const MemeWall = () => {
  const [memes, setMemes] = useState([
    { id: 1, src: meme1, votes: 10 },
    { id: 2, src: meme2, votes: 15 },
    // Add more meme objects as needed
  ]);

  const handleVote = (id) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === id ? { ...meme, votes: meme.votes + 1 } : meme
    );
    setMemes(updatedMemes);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const fileInput = event.target.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    if (file) {
      const newMeme = {
        id: memes.length + 1,
        src: URL.createObjectURL(file),
        votes: 0,
      };

      setMemes([...memes, newMeme]);

      // Clear the input field
      fileInput.value = '';
    }
  };

  return (
    <div className="meme-wall-container">
      <h2>Meme Wall</h2>
      <p>Vote for your favorite memes or upload a new one!</p>

      <div className="memes">
        {memes.map((meme) => (
          <div key={meme.id} className="meme-card">
            <img src={meme.src} alt={`Meme ${meme.id}`} className="meme-image" />
            <div className="meme-footer">
              <p>Votes: {meme.votes}</p>
              <button onClick={() => handleVote(meme.id)} className='vote-now-button'>Vote</button>
            </div>
          </div>
        ))}
      </div>

      <div className="upload-form">
        <h3>Upload Your Meme</h3>
        <form onSubmit={handleUpload}>
          <input type="file" accept="image/*" />
          <button type="submit" className='upload-button'>Upload</button>
        </form>
      </div>
      <VoiceNavigationApp />

    </div>
  );
};

export default MemeWall;
