import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutProject page__aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__container">
        <div>
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__time-learn">
        <p className="aboutProject__progress aboutProject__progress_type_backend">
          1 неделя
        </p>
        <p className="aboutProject__progress">4 недели</p>
        <span className="aboutProject__text">Back-end</span>
        <span className="aboutProject__text">Front-end</span>
      </div>
    </section>
  );
}
