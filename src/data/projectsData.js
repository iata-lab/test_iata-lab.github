// ============================================
// 📋 GUÍA PARA MODIFICAR PROYECTOS Y EXPERIENCIAS
// ============================================
//
// 🆕 PARA AÑADIR UN PROYECTO:
// 1. Importar la imagen arriba: import miImg from "../assets/img/mi-imagen.png";
// 2. Copiar la estructura de abajo (TEMPLATE) en allProjects
// 3. Agregar el ID a frontendProjects O dataScienceProjects
//
// ❌ PARA ELIMINAR UN PROYECTO:
// 1. Borrar todo el bloque del proyecto en allProjects
// 2. Borrar la línea en frontendProjects O dataScienceProjects
//
// ⚠️ IMPORTANTE: NO modificar Projects.jsx, App.jsx ni otros archivos
// Todo se actualiza automáticamente
//
// ============================================

// Experience / Work images
import holmoyLogoImg from "../assets/img/holmoy-logo.png";
import dicoexLogoImg from "../assets/img/dicoex-logo.jpg";
import logoIneImg from "../assets/img/logo-INE.jpg";
import basqueTradeLogoImg from "../assets/img/basque-trade-logo.png";
import seatCupraImg from "../assets/img/seat-cupra.png";
import bbvaLogoImg from "../assets/img/bbva-logo.png";
import pnudLogoImg from "../assets/img/pnud-logo.png";
import mercedesBenzMadridImg from "../assets/img/Mercedes-Benz-Madrid-Exterior.jpg";
import africaDirectoLogoImg from "../assets/img/africa-directo-logo.png";
import africaDirecto4Img from "../assets/img/africa-directo-4-pipe-installation.jpg";
import africaDirecto5Img from "../assets/img/africa-directo-5-ambulance-albino.jpg";
import africaDirecto9Img from "../assets/img/africa-directo-9-children-malawi.jpg";
import africaDirecto11Img from "../assets/img/africa-directo-11-class-orphan-malawi.jpg";

// ============================================
// 📦 TODOS LOS PROYECTOS (allProjects)
// ============================================

export const allProjects = {
  "holmoy-maritime": {
    id: "holmoy-maritime",
    title: "Operario - Holmøy Maritime AS",
    year: "2024 - 2025",
    description:
      "Operario producción en la industria pesquera de Noruega (Bergen e Islas Lofoten). Esta etapa fue un recurso personal para conseguir dinero para la adquisición de una empresariales así como el perfeccionamiento del inglés.",
    images: [holmoyLogoImg],
    details: {
      technologies: [
        "Inglés Profesional (Full Immersion)",
        "Gestión de Procesos Industriales",
      ],
      features: [
        "Desempeño en entornos de alta presión y condiciones climáticas extremas",
        "Mejora fluida de la competencia lingüística en inglés en contexto laboral",
        "Adaptabilidad cultural y trabajo en equipos internacionales",
      ],
    },
  },
  "asistente-director": {
    id: "asistente-director",
    title: "Asistente Dirección - DICOEX",
    year: "2024",
    description:
      "Realicé gestiones diarias en empresa unipersonal de distribución de productos químicos y de laboratorio para empresas industriales (emisión y envío de facturas, trato directo con clientes y proveedores, fiscalidad). Ayuda en la búsqueda de subvenciones para el traspaso del negocio.",
    images: [dicoexLogoImg],
    details: {
      responsibilities: [
        "Emisión y envío de facturas a clientes",
        "Trato directo con clientes y proveedores",
        "Gestión de fiscalidad empresarial",
        "Búsqueda y gestión de subvenciones para traspaso de negocio",
      ],
      skills: [
        "Gestión administrativa y fiscal",
        "Comunicación B2B",
        "Atención al cliente",
        "Gestión de relaciones con proveedores",
      ],
    },
  },
  "oposicion-ine": {
    id: "oposicion-ine",
    title: "Opositor a Diplomado Estadístico del Estado - INE",
    year: "2022 - 2024",
    description:
      "Opositor a tiempo completo a Diplomado Estadístico del Estado (Grupo A2) del INE. Superación del proceso selectivo en dos convocatorias consecutivas. Demostrada capacidad de superación y aprendizaje intensivo en materias de estadística, economía, demografía y análisis de datos.",
    images: [logoIneImg],
    details: {
      technologies: [
        "Estadística Descriptiva e Inferencial",
        "Muestreo",
        "Econometría y Macroeconomía",
        "Demografía y Análisis de Población",
        "Derecho Administrativo y Constitucional",
      ],
      features: [
        "Superación de procesos selectivos en dos convocatorias consecutivas",
        "Capacidad de aprendizaje autónomo y gestión de objetivos a largo plazo",
        "Análisis crítico de indicadores socioeconómicos y demográficos",
        "Gestión del estrés y disciplina",
      ],
    },
  },
  "master-beint-munich": {
    id: "master-beint-munich",
    title: "Beca de Internacionalización BEINT - SPRI Múnich",
    year: "2021",
    description:
      "Programa de especialización en comercio internacional que incluyó una fase de formación técnica y una estancia profesional en la oficina de la SPRI en Múnich. Durante este periodo, actué como enlace estratégico para la expansión de empresas vascas en el mercado Alemán.",
    images: [basqueTradeLogoImg],
    details: {
      technologies: [
        "Inteligencia de Mercados",
        "Estrategias de Internacionalización",
        "Consultoría de Negocio",
        "Alemán e Inglés Profesional",
        "Llamadas, CRM y Prospección B2B",
      ],
      features: [
        "Prospección y apertura de mercados en la región de Baviera",
        "Identificación y filtrado de partners estratégicos y clientes potenciales",
        "Apoyo operativo y logístico en el coworking de la oficina de SPRI",
        "Elaboración de informes sectoriales sobre tendencias industriales en Alemania",
      ],
    },
  },
  "seat-desarrollo-negocio": {
    id: "seat-desarrollo-negocio",
    title: "Desarrollo de Negocio - SEAT",
    year: "2020",
    description:
      "Estrategia y desarrollo de la start-up de movilidad urbana de SEAT en Barcelona. Actué como catalizador para la integración de soluciones disruptivas dentro de la estructura corporativa y coordinando la comunicación estratégica entre los departamentos del Grupo.",
    images: [seatCupraImg],
    details: {
      technologies: [
        "Trainee Grupo Volkswagen - SEAT",
        "KPI´s y Métricas de Negocio",
        "Análisis de Tendencias de Movilidad",
        "Gestión de Stakeholders",
        "Estrategia Go-to-Market",
      ],
      features: [
        "Impulso de la estrategia comercial para nuevas soluciones de movilidad urbana",
        "Nexo de unión estratégico entre la unidad de innovación y departamentos corporativos",
        "Validación de modelos de negocio y viabilidad financiera de proyectos",
        "Coordinación de equipos multidisciplinares en un entorno de innovación abierta",
        "Identificación de oportunidades de crecimiento y partners clave en el ecosistema mobility en Barcelona",
      ],
    },
  },

  // DATA SCIENCE PROJECTS
  "bbva-investment-banking": {
    id: "bbva-investment-banking",
    title: "Ventas de Derivados - BBVA CIB",
    year: "2018 - 2019",
    description:
      "Asistencia comercial en la oficina de Banca de Inversión de BBVA en Düsseldorf, Alemania. Colaboración directa con el equipo de ventas institucional para la gestión de productos complejos de Renta Fija y Variable.",
    images: [bbvaLogoImg],
    details: {
      technologies: [
        "Derivados de Renta Variable",
        "Análisis de Mercados Financieros",
        "Gestión de Carteras Corporativas",
        "Alemán e Inglés de Negocios",
      ],
      features: [
        "Soporte en la venta de derivados para otros bancos",
        "Gestión de relaciones con clientes en un entorno financiero de alto nivel",
        "Asistencia presencial y telefónica en el hub financiero de Düsseldorf",
      ],
    },
  },

  "pnud-naciones-unidas": {
    id: "pnud-naciones-unidas",
    title: "Asistente de Monitoreo - Naciones Unidas",
    year: "2017",
    description:
      "Prácticas en el Programa de las Naciones Unidas para el Desarrollo en Santiago de Chile. Mi labor se centró en la supervisión técnica de proyectos de desarrollo agrario y la coordinación con contrapartes locales para el fortalecimiento de comunidades rurales en terreno.",
    images: [pnudLogoImg],
    details: {
      technologies: [
        "Sistemas de Monitoreo y Evaluación (M&E)",
        "Planificación de Proyectos de Desarrollo",
        "Gestión de Stakeholders Institucionales",
        "Derechos Humanos y Políticas Públicas",
        "Desarrollo Sostenible",
      ],
      features: [
        "Representante de la ONU en la Mesa Estatal sobre VIH y Derechos Humanos",
        "Supervisión operativa de actividades de desarrollo en comunidades rurales",
        "Coordinación técnica con expertos en desarrollo agrario y social",
        "Elaboración de informes de impacto y seguimiento de programas",
      ],
    },
  },

  "mercedes-benz-finance": {
    id: "mercedes-benz-finance",
    title: "Controller Financiero - Mercedes-Benz Madrid",
    year: "2016",
    description:
      "Análisis y control financiero en el Grupo de Concesionarios oficiales de Mercedes-Benz en Madrid. Enfoque directo en la optimización de procesos internos y el control de riesgos para maximizar la rentabilidad de las unidades de negocio.",
    images: [mercedesBenzMadridImg],
    details: {
      technologies: [
        "Análisis Avanzado en Excel",
        "Control de Riesgos Financieros",
        "Reporting Financiero",
        "Contabilidad Analítica",
        "Business Intelligence",
      ],
      features: [
        "Identificación de puntos de mejora en la rentabilidad operativa",
        "Presentación mensual de resultados y KPIs a la Dirección General",
        "Análisis ágil de grandes volúmenes de datos para la toma de decisiones",
        "Auditoría interna de procesos de facturación y flujos financieros",
      ],
    },
  },

  "africa-directo-pm": {
    id: "africa-directo-pm",
    title: "Project Manager - África Directo",
    year: "2015",
    description:
      "Responsable de la coordinación integral de proyectos de cooperación al desarrollo en Malawi. Gestión de equipos multidisciplinares y recursos económicos en entornos de alta complejidad para asegurar el impacto social en áreas estratégicas como salud y agricultura.",
    images: [
      africaDirectoLogoImg,
      africaDirecto4Img,
      africaDirecto5Img,
      africaDirecto9Img,
      africaDirecto11Img,
    ],
    details: {
      technologies: [
        "Gestión de Proyectos (PMO)",
        "Control de Flujo de Caja (Cash Flow)",
        "Contabilidad de Proyectos",
        "Liderazgo de Equipos Multiculturales",
        "Planificación Estratégica",
      ],
      features: [
        "Liderazgo de un equipo de 15 asistentes locales en 5 áreas estratégicas",
        "Supervisión de impacto directo en comunidades de más de 500 personas",
        "Gestión de la contabilidad y finanzas de la misión en colaboración con el hospital",
        "Desarrollo de planes de sostenibilidad para proyectos agrícolas y de salud",
      ],
    },
  },
};

// ============================================
// 🎨 TEMPLATE PARA NUEVO PROYECTO
// ============================================
// Copia esto y reemplaza los valores:
/*
"mi-proyecto": {
  id: "mi-proyecto",
  title: "Título del Proyecto",
  year: "2023-2024",  // ← Opcional: añade las fechas aquí
  description: "Descripción corta del proyecto...",
  images: [miImagen],  // ← Importar imagen arriba
  details: {
    technologies: ["Tech 1", "Tech 2"],
    features: ["Feature 1", "Feature 2"],
  },
},
*/
// Luego agrégalo a frontendProjects o dataScienceProjects
// ============================================

// ============================================
// 🎯 EXPERIENCIA RECIENTE (Frontend Projects)
// ============================================
// Aquí van los proyectos/experiencias recientes por orden
export const frontendProjects = [
  allProjects["holmoy-maritime"],
  allProjects["asistente-director"],
  allProjects["oposicion-ine"],
  allProjects["master-beint-munich"],
  allProjects["seat-desarrollo-negocio"],
  // ← AGREGAR NUEVOS PROYECTOS FRONTEND AQUÍ
];

// ============================================
// 📊 ANTERIOR (Data Science Projects)
// ============================================
// Aquí van proyectos/experiencias anteriores
export const dataScienceProjects = [
  allProjects["bbva-investment-banking"],
  allProjects["pnud-naciones-unidas"],
  allProjects["mercedes-benz-finance"],
  allProjects["africa-directo-pm"],
  // ← AGREGAR NUEVOS PROYECTOS DATA SCIENCE AQUÍ
];

// ============================================
// 📚 PUBLICATIONS
// ============================================
export const publications = {
  english: [
    {
      title:
        "Parking Site Selection Management Using Fuzzy Logic and Multicriteria Decision Making",
      authors: "Farzanmanesh F, Ghaziaskari Naeini A, Makmom Abdullah A.",
      journal: "EnviromentAsia, Vol.3 (Special issue), 2010, pp.109-116",
      link: "https://www.researchgate.net/publication/283871418_Parking_site_selection_management_using_Fuzzy_logic_and_Multi_Criteria_Decision_Making",
    },
  ],
  persian: [
    {
      title:
        "Evaluation of different methods in construction management of public parking in the commercial center of the Isfahan city by using GIS",
      authors: "Ghanbari, S., Ghaziaskari Naeini, A.",
      journal:
        "Journal of Geography and Environmental Planning, University of Isfahan, Vol.22, No.44, 2011, pp.183-198",
    },
    {
      title:
        "Spatial analysis of urban green space with Geographic Information System",
      authors: "Zare, R., Ghaziaskari Naeini, A.",
      journal:
        "1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011",
    },
  ],
};

// ============================================
// 🏅 HONORS & AWARDS
// ============================================
// 🎓 STUDIES (replaces previous `publications`)
// ============================================
// Each entry uses: degree, university, image
export const studies = [
  {
    degree: "Master BEINT en Comercio Exterior (2021)",
    university:
      "Universidad del País Vasco (UPV-EHU), Universidad de Deusto, Universidad Mondragon",
    image: basqueTradeLogoImg,
  },
  {
    degree: "Bachelor in Business Administration (2013 - 2015)",
    university:
      "Hochschule für Wirtschaft und Recht (HWR Berlin) – Titulación Alemana (Erasmus)",
    image: null,
  },
  // ← Agrega más estudios aquí si lo necesitas
];

// ============================================
// 🏅 HONORS & AWARDS
// ============================================
export const honors = [
  {
    honor: "Aprobar el proceso de Concurso-Oposición en dos ocasiones",
    details:
      "Calificaciones de 7.13 y 5.35 en dos exámenes finales de dos convocatorias para Diplomado Estadístico del Estado, pero sin obtener plaza.",
  },
  {
    honor: "Acceso al Máster Beint y rendimiento académico durante el Máster",
    details: "Clasificado en el puesto 21 de entre 600 aspirantes.",
  },
];
