import React from "react";

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-item">
        <h3 className="education-title">
          Bachelor of Computer and Information Sciences
        </h3>
        <p className="education-institution">
          Auckland University of Technology
        </p>
        <p className="education-date">2020 - 2023</p>
      </div>
      <div className="education-item">
        <h3 className="education-title">
          Certificate in Advance Travel, Tourism and Business
        </h3>
        <p className="education-institution">
          Sir George Seymour National College of Airline, Travel and Tourism{" "}
        </p>
        <p className="education-date">2011</p>
      </div>
      <div className="education-item">
        <h3 className="education-title">NCEA Level 1 - 3</h3>
        <p className="education-institution">John Paul College Rotorua</p>
        <p className="education-date">2004 - 2010</p>
      </div>
    </section>
  );
};

export default Education;
