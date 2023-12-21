import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project page__about-project" id="aboutProject">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div>
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-learn">
        <p className="about-project__progress about-project__progress_type_backend">
          1 неделя
        </p>
        <p className="about-project__progress">4 недели</p>
        <span className="about-project__text">Back-end</span>
        <span className="about-project__text">Front-end</span>
      </div>
    </section>
  );
}
