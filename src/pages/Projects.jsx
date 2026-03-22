import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaDatabase, FaBook, FaTrophy } from "react-icons/fa";
import {
  frontendProjects,
  dataScienceProjects,
  studies,
  honors,
} from "../data/projectsData";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section">
      <h1 className="section-title">Experiencia</h1>

      <article>
        <h2 className="category-title">
          <FaCode />
          Experiencia Reciente
        </h2>
        <div className="projects-grid">
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.year && <p className="project-year">{project.year}</p>}
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article>
        <h2 className="category-title">
          <FaDatabase />
          Anterior
        </h2>
        <div className="projects-grid">
          {dataScienceProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.year && <p className="project-year">{project.year}</p>}
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="studies-section">
        <h2 className="category-title">
          <FaBook />
          Formación Complementaria
        </h2>
        <ul className="honors-list">
          {studies.map((s, i) => (
            <li key={i} className="honors-item">
              <h3>{s.degree}</h3>
              <p>{s.university}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="honors-section">
        <h2 className="category-title">
          <FaTrophy />
          Reconocimientos y Distinciones
        </h2>
        <ul className="honors-list">
          {honors.map((honor, index) => (
            <li key={index} className="honors-item">
              <h3>{honor.honor}</h3>
              <p>{honor.details}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Projects;
