import React from "react";

import Education from "../pages/Education";
import Skills from "../Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";


function Home() {
  return (
    <section id="home">
      <header>About Me</header>
      <About />
      <Education />
      <Skills />
      <Projects />
    </section>
  );
}

export default Home;
