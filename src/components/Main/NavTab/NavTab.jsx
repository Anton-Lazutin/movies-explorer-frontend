import "./NavTab.css";

export default function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__line">
          <a href="#aboutProject" className="nav-tab__link">
            О проекте
          </a>
        </li>
        <li className="nav-tab__line">
          <a href="#techs" className="nav-tab__link">
            Технологии
          </a>
        </li>
        <li className="nav-tab__line">
          <a href="#aboutMe" className="nav-tab__link">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
