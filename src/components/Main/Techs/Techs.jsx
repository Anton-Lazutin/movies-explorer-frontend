import './Techs.css';

export default function Techs() {
  return (
    <section className="techs page__techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__line">HTML</li>
          <li className="techs__line">CSS</li>
          <li className="techs__line">JS</li>
          <li className="techs__line">React</li>
          <li className="techs__line">Git</li>
          <li className="techs__line">Express.js</li>
          <li className="techs__line">mongoDB</li>
        </ul>
    </section>
  )
}