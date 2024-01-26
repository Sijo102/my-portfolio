import "./style.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Sijo102" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/sijo-joshua-678408256/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="mailto:sijojoshua@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </footer>
  );
};

export default Footer;
