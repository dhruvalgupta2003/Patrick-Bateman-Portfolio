import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-800 to-black py-4">
    
      <nav className="container mx-auto flex justify-around items-center ">
        <div className="text-white text-2xl font-semibold">
          Patrick Bateman
        </div>
        <div className="space-x-6">
          <a href="#about" className="text-white hover:text-gray-400 transition duration-300">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
