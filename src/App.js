import './App.css';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Body/Skills/Skills';
import GlassCard from './components/GlassCard/GlassCard';
import JesusGutierrezResume from './components/Body/JesusGutierrezResume/JesusGutierrezResume';
import FancyTitle from './components/FancyTitle/FancyTitle';
import Footer from './components/Footer/Footer';
import Education from './components/Body/Education/Education';
import React, { useState, useEffect } from 'react';
import GlassButton from './components/GlassButton/GlassButton';
import HScrollableList from './components/HScrollableList/HScrollableList copy';
import DropDown from './components/DropDown/DropDown';
import VScrollableList from './components/VScrollableList/VScrollableList copy';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode, isReady]);

  if (!isReady) return null;

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>



      <NavBar />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0rem',
        padding: '.5rem .5rem',
        paddingTop: '-1rem'  // for navbar spacing
      }}>


          <GlassButton style={{ marginTop: "1.75rem" }} onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </GlassButton>


        <FancyTitle title="Professional Skills and Experience" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <Skills />
        </GlassCard>

        <FancyTitle title="Education" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <Education />
        </GlassCard>

        <FancyTitle title="Resume - Download using PDF icon Above" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <JesusGutierrezResume />
        </GlassCard>

        {/* <FancyTitle title="Some Works - more coming soon!" />
        <GlassCard style={{ background: "rgba(32, 32, 42, 0.1)", color: "white", }}>
          <HScrollableList></HScrollableList>
        </GlassCard> */}

        <FancyTitle title="Project Highlights" />
        <GlassCard style={{
          background: "rgba(55, 55, 255, 0.1)",
          color: "white",

          display: "flex",           // force this card instance into flex
          flexDirection: "column",   // vertical stacking
          alignItems: "stretch",     // ⭐ makes children (dropdowns) expand full width
          width: "100%",             // ensure card expands
        }}>
          <VScrollableList />
        </GlassCard>



      </div>

      <Footer />


    </div>

  );
}

export default App;
