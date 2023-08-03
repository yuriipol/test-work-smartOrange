import { ReactComponent as Logo } from "../../Shared/images/Logo.svg";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.Navigation}>
          <Logo className={s.logo} />
          <ul className={s.listNav}>
            <li className={s.listNavItem}>ГЛАВНАЯ</li>
            <li className={s.listNavItem}>ГАЛЕРЕЯ</li>
            <li className={s.listNavItem}>ПРОЕКТЫ</li>
            <li className={s.listNavItem}>СЕРТИФИКАТЫ</li>
            <li className={s.listNavItem}>КОНТАКТЫ</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
