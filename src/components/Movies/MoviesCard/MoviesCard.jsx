import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesCard({ name, src, trailerLink }) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  function onClick() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
  return (
    <li className="card">
      <div className="card__container">
        <Link to={trailerLink} target="_blank">
          <img src={src} alt="карточка фильма" className="card__image" />
        </Link>
        {pathname === "/movies" ? (
          <button
            type="button"
            className={`card__save ${click ? "card__save_active" : ""}`}
            onClick={onClick}
          ></button>
        ) : (
          <button
            type="button"
            className={`card__save card__save_type_delete`}
            onClick={onClick}
          ></button>
        )}
        <div className="card__overview">
          <p className="card__subtitle">{name}</p>
          <span className="card__duration">1ч 47м</span>
        </div>
      </div>
    </li>
  );
}
