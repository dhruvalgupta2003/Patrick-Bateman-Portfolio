import React from 'react'
import Header from "../components/Header";
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
const Home = () => {
  return (
    <div>
      < Header />
      <HeroSection/> 
      < About />
      {/* <MusicPlayer/> */}
      <Footer />

    </div>
  )
}

export default Home




