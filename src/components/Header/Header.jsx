import "./Header.css";

export default function Header() {

  return (
    <header
      className="header page__header"
    >
      <div>
        <div className="header__link-home"></div>
      </div>
        <nav>
          <ul className="header__links-container">
            <li>
              <div className="header__signup">
                Регистрация
              </div>
            </li>
            <li>
              <div className="header__signin">
                Войти
              </div>
            </li>
          </ul>
        </nav>
    </header>
  );
}
