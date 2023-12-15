import './Footer.css';

export default function Footer() {

  return (
    <footer className="footer page__footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__subtitle">© 2023</p>
        <nav className="footer__nav">
          <a 
            href='https://practicum.yandex.ru/' 
            target='_blank' 
            className="footer__link" 
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a 
            href='https://github.com/Anton-Lazutin' 
            target='_blank' 
            className="footer__link footer__link_git" 
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  )
}