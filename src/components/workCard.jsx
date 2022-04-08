import React from "react";
import WorkModal from "./workModal";

function WorkCard({ title, category, year }) {
  return (
    <div>
      <div
        className="card text-white"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        <img src="" className="card-img-top" alt="..."></img>
        <div className="card-body text-start">
          <div className="row">
            <h5 className="col card-title">{title}</h5>
            <div className="col-auto">{year}</div>
          </div>
          <h6>{category}</h6>
        </div>
      </div>
      <WorkModal />
    </div>
  );
}

export default WorkCard;
