import React, { useEffect, useState } from 'react';
import backgroundMusic from '../assets/bgm/American Psycho ! Theme ! American Psycho.mp3';
import patrickImage from '../assets/patric_bateman.jpg';

const HeroSection = () => {
  const [playMusic, setPlayMusic] = useState(false); // Initialize as false

  useEffect(() => {
    const audio = new Audio(backgroundMusic);

    if (playMusic) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    const timeout = setTimeout(() => {
      setPlayMusic(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [playMusic]);

  // Function to handle playing the audio after user interaction
  const handlePlayMusic = () => {
    setPlayMusic(true);
  };

  return (
    <div
      className="flex items-center justify-between h-screen bg-black relative"
      onClick={handlePlayMusic} // Add this click event to trigger audio playback
      style={{ backgroundImage: `url(${patrickImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-white text-left mt-4 max-w-lg ml-20">
        <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 animate-gradient-x">
          Patrick Bateman
        </h1>
        <p className="mt-4 text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 animate-gradient-x">
          Immerse yourself in the sophisticated yet twisted life of Patrick Bateman,
          where appearances can be deceiving and the lines between sanity and chaos blur.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
