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

      <GlassButton style={{marginTop:"1.5rem"}} onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </GlassButton>


      <NavBar />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0rem',
        padding: '.5rem .5rem',
        paddingTop: '-1rem'  // for navbar spacing
      }}>


        <GlassCard style={{ background: "rgba(58, 156, 236, 0.54)", color: "white" }}>
          <h1>Welcome to My Portfolio</h1>
          <b><p>Please feel free to contact me using the Contacts bar above! 😀</p></b>
          <p>This website is constantly being updated. Stay tuned!</p>
        </GlassCard>

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

        <FancyTitle title="Some Works - more coming soon!" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white", }}>
          <HScrollableList></HScrollableList>
        </GlassCard>

      </div>

      <Footer />




    </div>



  );
}

export default App;
