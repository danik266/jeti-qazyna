import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Atmosphere from './components/Atmosphere';
import Zones from './components/Zones';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import MapAndContact from './components/MapAndContact';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-reveal-stack">
        <div className="sticky-reveal-container">
          <Hero />
        </div>
        <div className="reveal-content-layer">
          <Atmosphere />
          <Zones />
          <MenuPreview />
          <Gallery />
          <MapAndContact />
        </div>
      </main>

      <footer className="footer-premium">
        <div className="container">
          <p className="copyright">&copy; {new Date().getFullYear()} Jeti Qazyna | Воплощение казахского гостеприимства в Павлодаре</p>
        </div>
      </footer>
    </>
  );
}

export default App;
