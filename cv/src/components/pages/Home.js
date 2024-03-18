import React from "react";

import Education from "../pages/Education";
import Projects from "../pages/Projects";
import About from "../pages/About";


function Home() {
  return (
    <section id="home">
      <h1>About Me</h1>
      <About />
      <Education />
      <Projects />
    </section>
  );
}

export default Home;
