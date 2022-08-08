import React from "react";
import "../../sass/main.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <nav className="navigation__nav">
        <ul className="navigation__list">
        <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about" className="navigation__link">
              About Me
            </a>
          </li>
          <li className="navigation__item">
            <a href="/compsci" className="navigation__link">
              Computer Science
            </a>
          </li>
          <li className="navigation__item">
            <a href="/psych" className="navigation__link">
              Psychology
            </a>
          </li>
          <li className="navigation__item">
            <a href="/chess" className="navigation__link">
              Chess
            </a>
          </li>
          <li className="navigation__item">
            <a href="/foom" className="navigation__link">
              Foom
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
