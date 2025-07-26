import React from "react";
import "./GlassCard.css"; // Assuming you have a CSS file for styling

export default function GlassCard({ children }) {
    return (
        <div className="glass-card">
            {children}
        </div>
    );
}