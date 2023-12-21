import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link onClick={() => navigate(-1)} className="not-found__link">
          Назад
        </Link>
      </div>
    </section>
  );
}
