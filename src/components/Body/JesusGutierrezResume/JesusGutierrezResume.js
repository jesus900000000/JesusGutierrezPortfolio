import React, { useState } from "react";
import "./JesusGutierrezResume.css"; // Ensure you have the CSS file for styling

import ResumePage1 from "../../../ResumeImages/page1.png";
import ResumePage2 from "../../../ResumeImages/page2.png";
import ResumePage3 from "../../../ResumeImages/page3.png";

const resumePages = [ResumePage1, ResumePage2, ResumePage3];

export default function ResumeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resumePages.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + resumePages.length) % resumePages.length
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button left">←</button>

      <div className={`carousel-slide ${direction}`}>
        <img
          src={resumePages[currentIndex]}
          alt={`Resume page ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      <button onClick={nextSlide} className="carousel-button right">→</button>
    </div>
  );
}