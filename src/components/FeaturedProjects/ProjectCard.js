import React, { useEffect, useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project, onExpand }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="project-card">
      <div className="project-card-top">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image.src || image}
            style={image.style || {}}
            alt={`${project.title} screenshot ${index + 1}`}
            className={`project-card-image ${
              index === currentImage ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="project-card-bottom">
        <h3 className="project-card-title">{project.title}</h3>

        <div className="project-card-tech">
          {project.tech.map((item, index) => (
            <span className="project-tech-badge" key={index}>
              {item.logo && (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="tech-icon-img"
                />
              )}
              <span>{item.name}</span>
            </span>
          ))}
        </div>

        <p className="project-card-description">{project.shortDescription}</p>

        <div className="project-card-links">
          {project.github && project.github.trim() !== "" && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.demo && project.demo.trim() !== "" && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}

          <button className="expand-button" onClick={onExpand}>
            Expand
          </button>
        </div>
      </div>
    </div>
  );
}