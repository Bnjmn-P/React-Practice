import React from "react";
import "./Navbar.css"; // Create this CSS file for styling

const Navbar = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEducation = () => {
    const educationSection = document.getElementById("education");
    educationSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <button onClick={scrollToAbout}>About</button>
        </li>
        <li>
          <button onClick={scrollToProjects}>Projects</button>
        </li>
        <li>
          <button onClick={scrollToEducation}>Education</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
