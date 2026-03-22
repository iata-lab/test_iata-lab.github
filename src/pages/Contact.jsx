import React, { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "inigo.mata@outlook.es";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola. Quiero enviarte este mensaje:");
    window.open(`https://wa.me/+34614024304?text=${message}`, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* WhatsApp Section */}
        <div className="whatsapp-section">
          <h2 className="section-title">Contacta conmigo por WhatsApp</h2>
          <p>Puedes enviarme un mensaje directamente a través de WhatsApp.</p>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp />
            Iniciar Chat
          </button>
        </div>
      </div>

      {/* Email Section */}
      <div className="email-section">
        <h2 className="section-title">Envíame un email</h2>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope />
            <button
              className="email-copy"
              onClick={handleCopyEmail}
              title="Haz clic para copiar el email"
            >
              {email}
              {copied ? (
                <FaCheck className="copy-icon" />
              ) : (
                <FaCopy className="copy-icon" />
              )}
            </button>
          </div>
        </div>
        <p>
          ¡También puedes copiar el email anterior y contactarme directamente!
        </p>
      </div>

      {/* Form Section */}
      <div className="contact-form">
        <h1 className="section-title">
          <FaEnvelope />
          {/* Formulario */}
        </h1>
        <form
          id="contact-form"
          action="https://formsubmit.co/871ac2a59120e586076450bf93c388e3"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://iata-lab.github.io/#/thank-you"
          />

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser />
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
              placeholder="Escribe tu nombre aquí."
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope />
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
              placeholder="Escribe tu email aquí."
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Por favor ingresa una dirección de email válida (ej: nombre@ejemplo.com)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <FaEnvelope />
              Tu Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              required
              placeholder="Escribe tu mensaje aquí."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            <FaPaperPlane />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
