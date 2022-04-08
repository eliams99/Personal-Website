import React, { useState, useEffect } from "react";
import { getSkills } from "../services/skillsService.js";

function Skills() {
  const [skills, setSkills] = useState({
    languages: [],
    "programming languages": [],
    "other IT skills": [],
    personal: [],
  });

  useEffect(() => {
    setSkills(getSkills());
  });

  console.log(skills);

  return (
    <div className="skills-section section">
      <h2 className="section-title text-light">Skills</h2>
      <div className="section-body skills-container">
        <div className="languages text-start">
          <h5 className="text-light">Languages</h5>
          {skills.languages.map((language) => (
            <div className="text-light">{language}</div>
          ))}
        </div>
        <div className="languages text-start">
          <h5 className="text-light">Programming</h5>
          {skills["programming languages"].map((language) => (
            <div className="text-light">{language}</div>
          ))}
        </div>
        <div className="languages text-start">
          <h5 className="text-light">Other IT skills</h5>
          {skills["other IT skills"].map((skill) => (
            <div className="text-light">{skill}</div>
          ))}
        </div>
        <div className="languages text-start">
          <h5 className="text-light">Personal</h5>
          {skills.personal.map((personal) => (
            <div className="text-light">{personal}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
