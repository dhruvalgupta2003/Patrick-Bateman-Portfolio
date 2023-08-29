import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>
        © {new Date().getFullYear()} Dhruval Gupta, All rights reserved. Made with passion.
      </p>
    </footer>
  );
}

export default Footer;
