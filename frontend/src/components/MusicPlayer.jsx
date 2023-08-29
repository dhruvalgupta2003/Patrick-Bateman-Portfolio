import React, { useState, useRef } from 'react';
import music from '../assets/bgm/American Psycho ! Theme ! American Psycho.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-48 h-48 relative animate-spin-slow">
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-45" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-90" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-135" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-180" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-225" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-270" />
        <div className="w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform rotate-315" />
        <div className={`w-full h-full bg-white rounded-full border-4 border-black absolute top-0 left-0 transform ${isPlaying ? 'rotate-0' : 'rotate-45'}`} />
      </div>
      <div className="ml-8">
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-lg shadow hover:bg-red-800 focus:outline-none"
          onClick={togglePlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <audio ref={audioRef} src={music} />
    </div>
  );
}

export default MusicPlayer;
