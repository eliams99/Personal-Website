import React from "react";
import LazyLoad from "react-lazyload";

const CarouselItem = ({ isActive, fileName, title }) => {
  return (
    <div className={isActive ? "carousel-item active" : "carousel-item"}>
      {/* <LazyLoad>
        <img src={img} className="d-block w-100" alt="..." />
      </LazyLoad> */}
      <img src={fileName} className="d-block w-100" alt="..." />
      <div className="carousel-caption section d-none d-md-block">
        <h2 className="text-start">{title}</h2>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default CarouselItem;
