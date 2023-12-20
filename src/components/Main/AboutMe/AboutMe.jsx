import "./AboutMe.css";
import photo from "../../../images/photo.JPG";

export default function AboutMe() {
  return (
    <section className="aboutMe page__aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__text-container">
          <h3 className="aboutMe__name">Антон</h3>
          <p className="aboutMe__job">Фронтенд-разработчик, 29 лет</p>
          <p className="aboutMe__description">
            я родился в москве в 70ом на краю города моча рано ударила в голову
            в 4 активно ругался матом в детском саду девочки впервые показали
            мне пизду потом школа вонючая форма драки клей так я становился
            сильней воровал деньги в раздевалке в 8 начал курить в 11 кинул
            первую палку забил на родителей стал пропадать с друзьями на свалке
          </p>
          <a
            href="https://github.com/Anton-Lazutin"
            target="_blank"
            className="aboutMe__link"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="#" className="aboutMe__photo" />
      </div>
    </section>
  );
}
