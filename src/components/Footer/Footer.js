import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jesus Gutierrez — Built using React 😊</p>
    </footer>
  );
}

export default Footer;
