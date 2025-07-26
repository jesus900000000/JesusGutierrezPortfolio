import React, { useState, useEffect } from "react";
import Skillsbar from "../Body/Skills/Skills";
import Contactbar from "../ContactBar/Contactbar";
import "./NavBar.css";
import GlassCard from "../GlassCard/GlassCard";

export default function NavBar() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrink" : ""}`}>
      <h1 className="navbar-title">Jesus Gutierrez</h1>
      <GlassCard>
        <Contactbar />
      </GlassCard>
    </nav>
  );
}
