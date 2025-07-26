// GlassCard.js
import React from "react";
import "./GlassCard.css";

export default function GlassCard({ children, style = {} }) {
  // Default styles
  const defaultStyles = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(70px)",
    WebkitBackdropFilter: "blur(70px)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "2rem",
    margin: "2rem",
    width: "90%",
    maxWidth: "1000px",
    display: "flex",              // ✅ center horizontally/vertically
    flexDirection: "column",      // ✅ stack items vertically
    alignItems: "center",         // ✅ horizontal center
    justifyContent: "center",     // ✅ vertical center
  };

  // Merge default and custom styles
  const mergedStyles = { ...defaultStyles, ...style };

  return <div className="glass-card" style={mergedStyles}>{children}</div>;
}
