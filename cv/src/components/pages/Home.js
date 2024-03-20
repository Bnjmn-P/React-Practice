import React from "react";

import Education from "../pages/Education";
import Projects from "../pages/Projects";
import About from "../pages/About";


function Home() {
  return (
    <section id="home">
      <About />
      <Education />
      <Projects />
    </section>
  );
}

export default Home;
