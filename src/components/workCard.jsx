import React from "react";

function WorkCard({ title, category, year }) {
  return (
    <div className="card">
      <img src="" className="card-img-top" alt="..."></img>
      <div className="card-body text-start">
        <div className="row">
          <h5 className="col card-title">{title}</h5>
          <div className="col-auto">{year}</div>
        </div>
        <h6>{category}</h6>
      </div>
    </div>
  );
}

export default WorkCard;
