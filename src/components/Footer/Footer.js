import { Link } from "react-router-dom";
import "./Footer.css";

import { routePaths } from "../../utils/constants";

import githubIcon from "../../images/icons/icon-github.svg";
import instagramIcon from "../../images/icons/icon-instagram.svg";

function Footer() {
  const footerClassName = "Footer";
  const navClassName = "Footer__container";
  const copyrightClassName = "Footer__copyright";
  const linkContainerClass = "Footer__links";
  const linkWrapperClass = "Footer__link-item";
  const linkClassName = "Footer__link";
  const iconContainerClass = "Footer__icon-links";
  const iconWrapperClass = "Footer__icon-link";
  const iconClassName = "Footer__icon";

  return (
    <footer className={footerClassName}>
      <nav className={navClassName}>
        <p className={copyrightClassName}>
          © 2022 Supersite, Powered by News API
        </p>
        <ul className={linkContainerClass}>
          <li className={linkWrapperClass}>
            <Link to={routePaths.home} className={linkClassName}>
              Home
            </Link>
          </li>
          <li className={linkWrapperClass}>
            <a
              href="https://practicum.yandex.com/"
              className={linkClassName}
              target="_blank"
              rel="noreferrer"
            >
              Practicum by Yandex
            </a>
          </li>
          <li className={linkWrapperClass}>
            <ul className={iconContainerClass}>
              <li className={iconWrapperClass}>
                <a
                  href="https://github.com/synthetic-borealis"
                  className={linkClassName}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={iconClassName} src={githubIcon} alt="github" />
                </a>
              </li>
              <li className={iconWrapperClass}>
                <a
                  href="https://www.instagram.com/hasarius/"
                  className={linkClassName}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={iconClassName}
                    src={instagramIcon}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
