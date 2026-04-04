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
<<<<<<< HEAD
import PDFViewer from './components/PDFViewer/PDFViewer';
=======
import HScrollableList from './components/HScrollableList/HScrollableList copy';
import DropDown from './components/DropDown/DropDown';
import VScrollableList from './components/VScrollableList/VScrollableList copy';

>>>>>>> 1aeaa5cac2aafff3ec17f1b945e52a77489f7ab9

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const email = "jgutierrez9000@gmail.com";
  const subject = encodeURIComponent("Portfolio Inquiry - Freelance Services Request");
  const body = encodeURIComponent(
    "Good day Jesus, \n\n" +
    "I have taken a look at your portfolio and I would like to request your freelance services. My project details are as follows:\n\n" +
    "Project Description:\n\n" +
    "Scope of Work:\n\n" +  
    "Timeline:\n\n" +
    "Budget:\n\n" +
    "Please let me know your availability and any additional information you may need. Looking forward to working with you!\n\n" +
    "Best regards,\n[Your Name]"
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}&tf=1`;

useEffect(() => {
  const savedMode = localStorage.getItem('darkMode');

  if (savedMode === null) {
    setDarkMode(true);
    localStorage.setItem('darkMode', 'true');
  } else {
    setDarkMode(savedMode === 'true');
  }

  setIsReady(true);
}, []);


  useEffect(() => {
    if (isReady) {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode, isReady]);

  if (!isReady) return null;

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ paddingTop: '12rem' }}>

      <NavBar />

      {/* this div holds the glass cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0rem',
        padding: '.5rem .5rem', //padding for cards on frontpage,  padding on top and width respectively
        paddingTop: '-1rem'  // for navbar spacing
      }}>

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center',  paddingTop: '1.25rem', marginBottom: '-1.85rem' }} title="theButtons">
  <GlassButton style={{ marginTop: "1.75rem" }} onClick={() => setDarkMode(prev => !prev)}>
    <span style={{ margin: 0 }}>{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}</span>
  </GlassButton>

  <a
    href={gmailUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }} // keep it looking like a button
  >
    <GlassButton
      style={{
        marginTop: "1.75rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
        alt="Freelance Request logo"
        style={{ width: "20px", height: "20px" }}
      />
      <span>Freelance Request?</span>

    </GlassButton>
  </a>
</div>

        <FancyTitle title="Professional Expertise" />
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

<<<<<<< HEAD
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <PDFViewer pdfUrl= '/UAVDroneProtocolProject.pdf' />
        </GlassCard>
=======
        {/* <FancyTitle title="Some Works - more coming soon!" />
        <GlassCard style={{ background: "rgba(32, 32, 42, 0.1)", color: "white", }}>
          <HScrollableList></HScrollableList>
        </GlassCard> */}

        <FancyTitle title="Project Highlights (more in the works too!)" />
        <GlassCard style={{
          background: "rgba(55, 55, 255, 0.1)",
          color: "white",

          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "100%",
        }}>
          <VScrollableList />
        </GlassCard>

>>>>>>> 1aeaa5cac2aafff3ec17f1b945e52a77489f7ab9


      </div>

      <Footer />


    </div>

  );
}

export default App;
