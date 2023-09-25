import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Benjamin Polglase</h1>
        <p className="header-subtitle">Software Developer</p>
        <div className="header-contact">
          <p>Email: benjaminpolglase@gmail.com</p>
          <p>
            {" "}
            <a
              href="https://www.linkedin.com/in/benjamin-polglase-ba3022275/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            &nbsp;
            <a
              href="https://github.com/Bnjmn-P"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
