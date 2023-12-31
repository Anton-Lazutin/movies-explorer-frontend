import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer page__footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__subtitle">© 2023</p>
        <nav className="footer__nav">
          <Link
            to={"https://practicum.yandex.ru/"}
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to={"https://github.com/Anton-Lazutin"}
            target="_blank"
            className="footer__link footer__link_git"
            rel="noreferrer"
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}
