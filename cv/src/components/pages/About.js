import React from 'react';
import bean from '../../bean.JPG';


const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I am currently an undergraduate Computer Science student at AUT, specializing in Software Development. Before embarking on my academic journey, I gained valuable experience across different sectors, including hospitality and retail. These roles have equipped me with a robust foundation in customer service and the ability to collaborate effectively with teams.</p>
      <p>I have a versatile approach to work, having taken on leadership responsibilities while also cherishing my role as a team player. I thrive on embracing new challenges and experiences, firmly believing that continuous learning is key to a successful and fulfilling career.</p>
      <p>In the realm of software development, my greatest passion lies in problem-solving. I derive immense satisfaction from the creative process of finding solutions and the ongoing refinement that development demands. Witnessing conceptual ideas transform into functional software with the potential to positively impact users is particularly rewarding.</p>
      <p>Throughout my academic journey, I've actively engaged in group projects employing various agile methodologies and extreme programming. I appreciate the pace, adaptability, and structure these approaches bring to collaborative endeavors. I've also come to understand the importance of sound development practices, including coding standards, thorough documentation, and version control.</p>
      <p>Beyond the world of programming, I'm an enthusiastic football fan who enjoys the outdoors, attending concerts, and indulging in cinematic experiences.</p>
      <img src={bean} alt="bean" style={{ width: '400px', height: 'auto' }}/>
    </section>
  );
}

export default About;
