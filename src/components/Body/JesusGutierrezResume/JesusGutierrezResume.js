import React from "react";
import "./JesusGutierrezResume.css";

import ResumePage1 from "../../../ResumeImages/page1.png";

export default function Resume() {
  return (
    <div className="resume-container">
      <a href="/JesusGutierrezResume.pdf" download>
        <img
          src={ResumePage1}
          alt="Resume"
          className="resume-image"
        />
      </a>
    </div>
  );
}