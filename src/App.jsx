import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ColorPaletteSection from './components/ColorPaletteSection';
import RsvpSpotifySection from './components/RsvpSpotifySection';
import GalleryGrid from './components/GalleryGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <TimelineSection />
      <GalleryGrid />
      <ColorPaletteSection />
      <RsvpSpotifySection />
      <Footer />
    </>
  );
};

export default App;
