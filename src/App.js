import './App.css';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Body/Skills/Skills';
import GlassCard from './components/GlassCard/GlassCard';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '2rem', 
        padding: '2rem 1rem', 
        paddingTop: '7rem'  // for navbar spacing
      }}>
        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <Skills />
        </GlassCard>

        <GlassCard style={{ background: "rgba(255, 0, 0, 0.48)", color: "white" }}>
          <h1>Welcome to My Portfolio</h1>
          <b><p>This is heavily under construction and is being worked on.</p></b>
          <p>Feel free to reach out to me via the contact bar above.</p>
        </GlassCard>

        <GlassCard style={{ background: "rgba(55, 55, 255, 0.1)", color: "white" }}>
          <b><p>Future Location of PDF viewer</p></b>
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
