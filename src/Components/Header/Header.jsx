import s from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={s.Navigation}>
      <ul className={s.listNav}>
        <li className={s.listNavItem}>ГЛАВНАЯ</li>
        <li className={s.listNavItem}>ГАЛЕРЕЯ</li>
        <li className={s.listNavItem}>ПРОЕКТЫ</li>
        <li className={s.listNavItem}>СЕРТИФИКАТЫ</li>
        <li className={s.listNavItem}>КОНТАКТЫ</li>
      </ul>
    </nav>
  );
};

export default Header;
