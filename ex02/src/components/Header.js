import React, { useState } from "react";
import headerMenu from "./props/props";

const Header = () => {
  const [active, setActive] = useState("My Shop");
  const [count, setCount] = useState(0);
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu menu">
          <div className="menu__logo">
            <a className="menu__logo-action" href="#">
              <img
                className="menu__logo-img"
                src={headerMenu[0].logoImg}
                alt="logo"
              ></img>
            </a>
          </div>

          <nav className="menu__actions">
            <ul className="menu__actions-list">
              {headerMenu[0].menu.map((el, idx) => (
                <li
                  className={`menu__actions-item ${
                    el === active ? "active" : ""
                  }`}
                  key={idx}
                >
                  <a className="menu__actions-link" key={idx} href="#">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__cart">
            {headerMenu[0].cart} ({count})
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
