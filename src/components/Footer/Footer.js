import { Link } from "react-router-dom";
import "./Footer.css";

import { routePaths } from "../../utils/constants";

import githubIcon from "../../images/icons/icon-github.svg";
import instagramIcon from "../../images/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__container">
        <p className="Footer__copyright">
          © 2022 Supersite, Powered by News API
        </p>
        <ul className="Footer__links">
          <li className="Footer__link-item">
            <Link to={routePaths.home} className="Footer__link">
              Home
            </Link>
          </li>
          <li className="Footer__link-item">
            <a
              href="https://practicum.yandex.com/"
              className="Footer__link"
              target="_blank"
            >
              Practicum by Yandex
            </a>
          </li>
          <li className="Footer__link-item">
            <a
              href="https://github.com/synthetic-borealis"
              className="Footer__link"
              target="_blank"
            >
              <img className="Footer__icon" src={githubIcon} alt="github" />
            </a>
          </li>
          <li className="Footer__link-item">
            <a
              href="https://www.instagram.com/hasarius/"
              className="Footer__link"
              target="_blank"
            >
              <img
                className="Footer__icon"
                src={instagramIcon}
                alt="instagram"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
