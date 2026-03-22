import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ images = [], description = "", title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay imágenes, usar una por defecto
  const displayImages = images.length > 0 ? images : ["/img/placeholder.png"];

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <div className="project-detail-container">
      {/* Carrusel */}
      <div className="carousel-section">
        <div className="carousel">
          <img
            src={displayImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />

          {displayImages.length > 1 && (
            <>
              <button
                className="carousel-button prev"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                className="carousel-button next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Indicadores de puntos */}
              <div className="carousel-indicators">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Descripción tipo cita */}
      <div className="description-section">
        <h1 className="project-title">{title}</h1>
        <blockquote className="project-description">{description}</blockquote>
      </div>
    </div>
  );
};

export default ProjectCarousel;
