import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProjectCarousel from "../components/ProjectCarousel";
import { allProjects } from "../data/projectsData";
import "./ProjectDetailExample.css";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = allProjects[projectId];

  if (!project) {
    return (
      <section className="project-detail-page">
        <div className="back-button-container">
          <Link to="/projects" className="back-button">
            <FaArrowLeft /> Volver a Proyectos
          </Link>
        </div>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Proyecto no encontrado</h2>
          <p>Lo sentimos, el proyecto que buscas no existe.</p>
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

      {/* Carrusel y descripción */}
      <ProjectCarousel
        images={project.images}
        title={project.title}
        description={project.description}
      />

      {/* Sección adicional de detalles */}
      <div className="project-details">
        {project.details.technologies && (
          <div className="detail-item">
            <h3>Tecnologías Utilizadas</h3>
            <ul>
              {project.details.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.details.features && (
          <div className="detail-item">
            <h3>Características Principales</h3>
            <ul>
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.details.responsibilities && (
          <div className="detail-item">
            <h3>Responsabilidades Principales</h3>
            <ul>
              {project.details.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}

        {project.details.skills && (
          <div className="detail-item">
            <h3>Habilidades Desarrolladas</h3>
            <ul>
              {project.details.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
