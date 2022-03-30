import React from "react";
import LazyLoad from "react-lazyload";

const CarouselInner = ({ isActive, fileName, title }) => {
  return (
    <div className={isActive ? "carousel-item active" : "carousel-item"}>
      {/* <LazyLoad>
        <img src={img} className="d-block w-100" alt="..." />
      </LazyLoad> */}
      <img src={fileName} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>{title}</h3>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  );
};

export default CarouselInner;
