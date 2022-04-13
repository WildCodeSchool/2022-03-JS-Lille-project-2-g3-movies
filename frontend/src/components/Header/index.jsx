import { useState } from "react";
import SHeader from "./style";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <SHeader>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="searchbar">Searchbar</div>
        <img
          className="navbar_logo"
          src="src/assets/cinerama.png"
          alt="logo cinerama"
        />
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1 ">
            <a href="/" className="navbar_link">
              Sortie de la semaine
            </a>
          </li>
          <li className="navbar_item slideInDown-2">
            <a href="/" className="navbar_link">
              Suggérator / filtres
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </nav>
    </SHeader>
  );
}
