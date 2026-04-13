import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscape);

    const timer = setTimeout(() => setIsVisible(true), 10);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!project) return null;

  const mainImage = project.images?.[0];

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return createPortal(
    <div
      className={`project-modal-overlay ${isVisible ? "show" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`project-modal-content ${isVisible ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={handleClose}>
          ×
        </button>

        <div className="project-modal-top">
          {mainImage?.src && (
            <img
              src={mainImage.src}
              alt={project.title}
              className="project-modal-main-image"
              style={mainImage.style || {}}
            />
          )}
        </div>

        <div className="project-modal-bottom">
          <h2 className="project-modal-title">{project.title}</h2>

          {project.longDescription && (
            <p className="project-modal-description">
              {project.longDescription}
            </p>
          )}

          {(project.github || project.demo) && (
            <div className="project-modal-links">
              {project.github?.trim() && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-button"
                >
                  GitHub
                </a>
              )}

              {project.demo?.trim() && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-button"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}