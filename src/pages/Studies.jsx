import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Studies.css";

// Import university images
import basqueTradeLogoImg from "../assets/img/basque-trade-logo.png";
import logoUpvEhuImg from "../assets/img/logo-upv-ehu.png";
import dsbPanoramicImg from "../assets/img/DSB-panoramic.jpg";

const Studies = () => {
  const education = [
    {
      degree: "Master BEINT en Comercio Exterior",
      year: "2021",
      university:
        "Universidad del País Vasco (UPV-EHU), Universidad de Deusto, Universidad Mondragon",
      image: basqueTradeLogoImg,
    },
    {
      degree: "Licenciatura en Administración y Dirección de Empresas",
      year: "2009 - 2015",
      university: "Universidad del País Vasco (UPV-EHU)",
      image: logoUpvEhuImg,
    },
    {
      degree: " Bachiller y selectividad alemana (Abitur)",
      year: "1994 - 2009",
      university: "Colegio Alemán San Bonifacio Bilbao",
      image: dsbPanoramicImg,
    },
  ];

  const training = [
    {
      title: "Web Development Bootcamp",
      period: "2025",
      provider: "The Bridge Digital Talent",
      details: "480 horas",
    },
    {
      title:
        "Gestión contable, fiscal y laboral de pequeños negocios o microempresas",
      period: "2019",
      provider: "Formación Bultz-Lan",
      details: "18 horas",
    },
    {
      title: "Bootcamp AllStartup",
      period: "2019",
      provider: "Demium Startups",
      details: "18 horas",
    },
    {
      title: "Especialización en Deep Learning",
      period: "2019",
      provider: "Universidad de Mondragon - Carlos Cernuda",
      details: "50 horas",
    },
    {
      title:
        "Bloomberg Market Concepts (BMC) - Financial Markets Certification",
      period: "2018",
      provider: "Bloomberg for Education",
      details: "12 horas",
    },
    {
      title: "Certificado de Formación Específica en Iniciación a la Empresa",
      period: "2016",
      provider: "Universidad de Alcalá (UAH)",
      details: "110 horas",
    },
    {
      title: "Excel Avanzado y Gestión de la Empresa",
      period: "2016",
      provider: "Colegio Vasco de Economistas - Ekonomistak",
      details: "40 horas",
    },
    {
      title: "Psicología de Inversión Tortugas Hispánicas",
      period: "2013",
      provider: "José Antonio Madrigal",
      details: "36 horas",
    },
    {
      title: "Formación Financiera y Mercados Bursátiles",
      period: "2010 / 2011",
      provider:
        "Euskal Herriko Unibertsitatea (UPV/EHU) - Jose Antonio Marañon",
      details: "45 horas",
    },
  ];

  return (
    <section className="studies-section">
      <h1 className="section-title">
        <FaGraduationCap />
        Educación
      </h1>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-image-container">
              <img
                src={edu.image}
                alt={edu.university}
                className="education-image"
                loading="lazy"
              />
            </div>
            <div className="education-content">
              <h2 className="education-degree">{edu.degree}</h2>
              <p className="education-year">{edu.year}</p>
              <p className="education-university">{edu.university}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="training-section">
        <h2 className="category-title">Cursos adicionales</h2>
        <div className="studies-grid">
          {training.map((study, index) => (
            <article key={index} className="study-card training-card">
              {" "}
              {/* Added specific class */}
              <div className="study-content">
                <h3 className="study-title">{study.title}</h3>
                <p className="study-subtitle">{study.period}</p>
                <p className="study-description">{study.provider}</p>
                {study.details && (
                  <p className="study-details">{study.details}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
