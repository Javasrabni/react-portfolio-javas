import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Profile from "./Components/Resume/Profile"
import Skills from "./Components/Skills/Skills"
import PortfolioSect from "./Components/Project/Portfolio-Sect"
import MusicPlayer from "./Components/Music player/MusicPlay"
import CertifeSect from './Components/Certificate/Certif-Sect';
import Footer from './Components/Footer/Footer';

import MobileMode from './MediaQuerry/MobileMode';

export default function App() {
  const MobileQuerry = window.matchMedia(' (max-width: 450px) ')
  const Mobile = MobileQuerry.matches
  return (
    <div className="App">
      <div className="Linear-Background" />
      <div className="Home" style={{ padding: Mobile ? "3rem 24px" : "6rem 24px" }}>
        <MobileMode>
          <Profile />
          <Skills />
          <PortfolioSect />
          <CertifeSect />
          <MusicPlayer />
          <Footer />
        </MobileMode>
      </div>
      <Analytics />
    </div>
  );
}

export function DesktopMode() {
  window.matchMedia(' (min-width: 1000px)')
  return;
}