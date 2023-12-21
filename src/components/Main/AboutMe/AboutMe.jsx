import "./AboutMe.css";
import { Link } from 'react-router-dom';
import photo from "../../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="aboutMe page__aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__text-container">
          <h3 className="aboutMe__name">Антон</h3>
          <p className="aboutMe__job">Фронтенд-разработчик, 29 лет</p>
          <p className="aboutMe__description">
            Я родился в прекрасном городе Самара, но в 17 лет переехал в
            Санкт-Петербург. Увлекаюсь горными лыжами, а так же люблю
            путешествовать. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            to={"https://github.com/Anton-Lazutin"}
            target="_blank"
            className="aboutMe__link"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
        <img src={photo} alt="фотография" className="aboutMe__photo" />
      </div>
    </section>
  );
}
