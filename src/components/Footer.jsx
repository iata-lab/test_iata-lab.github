import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/inigo-mata/",
      label: "LinkedIn",
    },
    {
      icon: faGithub,
      url: "https://github.com/iata-lab/",
      label: "GitHub",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">©{new Date().getFullYear()} Iñigo Mata</p>
        <ul className="social-links">
          {socialLinks.map((link) => (
            <li key={link.label} className="social-link">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
