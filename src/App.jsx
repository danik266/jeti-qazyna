import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Atmosphere from './components/Atmosphere';
import Zones from './components/Zones';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import MapAndContact from './components/MapAndContact';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

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
          <p className="copyright">&copy; {new Date().getFullYear()} {t('footer.copyright', 'Jeti Qazyna | Воплощение казахского гостеприимства в Павлодаре')}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
