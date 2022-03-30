import React, { useState, useEffect } from "react";
import { getWork } from "../services/workService";
import WorkCard from "./workCard";

function MyWork() {
  const [myWork, setMyWork] = useState([]);

  useEffect(() => {
    setMyWork(getWork());
  });

  return (
    <div className="my-5 w-100">
      <h2 className="text-light">Work</h2>
      <div className="cards-container">
        {myWork.map(({ title, category, year }) => (
          <WorkCard
            key={year + title}
            title={title}
            category={category}
            year={year}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
