import React from "react";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <section className="thank-you-section">
      <h1 className="thank-you-title">
        <FaCheckCircle />
        Muchas gracias por contactarme!
      </h1>
      <p className="thank-you-message">
        Tu mensaje se ha enviado correctamente. Me pondré en contacto contigo lo
        antes posible.
      </p>
      <Link to="/" className="home-button">
        <FaHome />
        Volver al Inicio
      </Link>
    </section>
  );
};

export default ThankYou;
