import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { teachingExperience } from "../data/projectsData";
import "./ProjectDetailExample.css";

const ExperienceDetail = () => {
  const { experienceId } = useParams();

  const experience = teachingExperience.find((exp) => exp.id === experienceId);

  if (!experience) {
    return (
      <section className="project-detail-page">
        <div className="back-button-container">
          <Link to="/projects" className="back-button">
            <FaArrowLeft /> Volver a Proyectos
          </Link>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Experiencia no encontrada</h2>
          <p>Lo sentimos, la experiencia que buscas no existe.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-page">
      {/* Botón para volver */}
      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          <FaArrowLeft /> Volver a Proyectos
        </Link>
      </div>

      {/* Contenido de la experiencia */}
      <div className="experience-detail-content">
        <div className="experience-header">
          <h1>{experience.institution}</h1>
        </div>

        {experience.institution && experience.courses && (
          <div className="teaching-details">
            <p className="description">{experience.description}</p>
            <div className="courses-section">
              <h2>Cursos Impartidos:</h2>
              <ul>
                {experience.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceDetail;
