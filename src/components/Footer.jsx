import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom/dist";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <h1 onClick={() => navigate("/")} className="footer__logo">
            <span class="flipped">Д</span>ИЛЕТАНТ
          </h1>
          <div className="footer__container-links">
            <Link to="#">Статьи</Link>
            <Link to="#">Тесты</Link>
            <Link to="#">Сборники</Link>
            <Link to="#">Журнал</Link>
            <Link to="#">Магазин</Link>
          </div>
          <div class="search-container">
            <div class="search-text">Введите запрос для поиска</div>
            <input type="text" class="search-input" placeholder="Поиск..." />
            <div class="search-icons"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
