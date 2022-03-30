import React, { useState, useEffect } from "react";
import { getSkills } from "../services/skillsService.js";

function Skills() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    setSkills(getSkills());
  });

  return (
    <div className="my-5">
      <h2 className="text-light">Skills</h2>
      <div className="skills-container d-flex">
        <div className="languages text-start me-4">
          <h5 className="text-light">Languages</h5>
          {skills.languages.map((language) => (
            <div className="text-light">{language}</div>
          ))}
        </div>
        <div className="languages text-start me-4">
          <h5 className="text-light">Programming</h5>
          {skills["programming languages"].map((language) => (
            <div className="text-light">{language}</div>
          ))}
        </div>
        <div className="languages text-start me-4">
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
