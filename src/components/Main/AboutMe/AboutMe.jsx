import "./AboutMe.css";
import { Link } from 'react-router-dom';
import photo from "../../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="about-me page__about-me" id="aboutMe">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Антон</h3>
          <p className="about-me__job">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">
            Я родился в прекрасном городе Самара, но в 17 лет переехал в
            Санкт-Петербург. Увлекаюсь горными лыжами, а так же люблю
            путешествовать. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            to={"https://github.com/Anton-Lazutin"}
            target="_blank"
            className="about-me__link"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
        <img src={photo} alt="фотография" className="about-me__photo" />
      </div>
    </section>
  );
}
