import React from "react";
import "./ProjectCard.css"
import GlassCard from "../GlassCard/GlassCard";

export default function ProjectCard({ name, description, photos, codeLink }) {
    return (

        <GlassCard>
            <img src={photos} alt={name}
                style={{
                    width: "200px",       
                    height: "auto",       
                    display: "block",
                    margin: "0 auto 8px", 
                }} />
            <h3>{name}</h3>
            <p>{description}</p>
            {codeLink !== "" ? <a href={codeLink} target="_blank" rel="noopener noreferrer"
                style={{
                    color: "#60a5fa",
                    textDecoration: "underline",
                    fontWeight: 600,
                }}>View Code</a>
                :<></>}
        </GlassCard>

    );
}
