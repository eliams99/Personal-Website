import React from "react";
import LazyLoad from "react-lazyload";
import CarouselItem from "./carouselItem";

function Photos() {
  const imagesBasePath = "./img/";
  const fileExtension = ".jpeg";
  const images = [
    {
      fileName: imagesBasePath + "Como" + fileExtension,
      title: "My birthplace",
      description: "",
    },
    {
      fileName: imagesBasePath + "Milan" + fileExtension,
      title: "My everyday city",
      description: "",
    },
    {
      fileName: imagesBasePath + "PortaDiPrada" + fileExtension,
      title: "My freetime",
      description: "",
    },
    {
      fileName: imagesBasePath + "PuntaMolentis" + fileExtension,
      title: "My roots",
      description: "",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="photos-section carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <CarouselItem isActive={index == 0 ? true : false} {...image} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Photos;
