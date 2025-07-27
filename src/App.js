import './App.css';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Body/Skills/Skills';
import GlassCard from './components/GlassCard/GlassCard';
import JesusGutierrezResume from './components/Body/JesusGutierrezResume/JesusGutierrezResume';
import FancyTitle from './components/FancyTitle/FancyTitle';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0rem',
        padding: '.5rem .5rem',
        paddingTop: '-1rem'  // for navbar spacing
      }}>

        <FancyTitle title="Skills" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <Skills />
        </GlassCard>

        <GlassCard style={{ background: "rgba(58, 156, 236, 0.54)", color: "white" }}>
          <h1>Welcome to My Portfolio</h1>
          <b><p>This is heavily under construction and is being worked on.</p></b>
          <b><p>Please feel free to contact me using the Contacts bar above! 😀</p></b>
        </GlassCard>

        <FancyTitle title="Resume - Download using PDF icon Above" />
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <JesusGutierrezResume />
        </GlassCard>

        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <b><p>Future Location of Sample work such as dupe websites, drone project information, and more</p></b>
        </GlassCard>

        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <b><p>Future Location of Professional Work Experience</p></b>
        </GlassCard>

        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <b><p>Information about this website, domain, frontend, TLS integration, and more</p></b>
        </GlassCard>
      </div>
    </div>
  );
}

export default App;
