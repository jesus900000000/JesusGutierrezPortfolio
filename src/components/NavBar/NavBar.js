import React from "react";
import Skillsbar from "../SkillsBar/Skillsbar";
import Contactbar from "../../ContactBar/Contactbar";
import "./NavBar.css"; // Assuming you have a CSS file for styling
import GlassCard from "../GlassCard/GlassCard";


export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Jesus Gutierrez</h1>

      <GlassCard>
      <Contactbar />
      </GlassCard>

      <GlassCard>
      <Skillsbar />
      </GlassCard>

    </nav>
  );
}