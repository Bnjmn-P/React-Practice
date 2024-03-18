import React from "react";

const Skills = () => {
  const skillsList = [
    "Java",
    "JavaScript",
    "SQL",
    "C",
    "C#",
    "PHP",
    "HTML",
    "CSS",
    "TypeScript",
    "GitHub",
    "React.js",
    "Adobe XD",
    "Object Oriented Programming",
    "Agile Methodologies",
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">
            <span style={{ fontSize: "1em" }}>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
