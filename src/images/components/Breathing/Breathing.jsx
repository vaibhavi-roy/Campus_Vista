import React, { useEffect } from 'react';
import "./Breathing.css";
// Make sure to adjust the path based on your project structure

const Breathing = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const startButton = document.getElementById('startButton');

    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    startButton.addEventListener('click', startBreathing);

    function startBreathing() {
      breathAnimation();

      document.querySelector('.pointer-container').style.animationPlayState = 'running';

      setInterval(breathAnimation, totalTime);
    }

    function breathAnimation() {
      text.innerText = 'Breathe In!';
      container.className = 'container grow';

      setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
          text.innerText = 'Breathe Out!';
          container.className = 'container shrink';
        }, holdTime);
      }, breatheTime);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      startButton.removeEventListener('click', startBreathing);
    };
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="style.css" />
      <title>Breathing Exercise</title>
      <h1 className='breathing-heading'>Breathing your way to relaxation</h1>
      <div className="container" id="container">
        <div className="circle" />
        <p id="text" />
        <div className="pointer-container">
          <span className="pointer" />
        </div>
        <div className="gradient-circle" />
      </div>
      <button id="startButton" value="Start">
        Start Breathing
      </button>
    </div>
  );
};

export default Breathing;
