import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__subtitle">Страница не найдена</p>
        <Link onClick={() => navigate(-1)} className="notFound__link">
          Назад
        </Link>
      </div>
    </section>
  );
}
