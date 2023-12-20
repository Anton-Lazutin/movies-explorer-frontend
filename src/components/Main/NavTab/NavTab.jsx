import "./NavTab.css";
import { Link } from "react-router-dom";

export default function NavTab() {
  return (
    <section className="navTab">
      <ul className="navTab__list">
        <li className="navTab__line">
          <Link to={"#aboutProject"} className="navTab__link">
            О проекте
          </Link>
        </li>
        <li className="navTab__line">
          <Link to={"#techs"} className="navTab__link">
            Технологии
          </Link>
        </li>
        <li className="navTab__line">
          <Link to={"#aboutMe"} className="navTab__link">
            Студент
          </Link>
        </li>
      </ul>
    </section>
  );
}
