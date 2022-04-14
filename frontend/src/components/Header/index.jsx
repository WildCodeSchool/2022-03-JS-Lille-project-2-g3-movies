import { useEffect, useState } from "react";
import SHeader from "./style";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setY(window.scrollY);
      });
    };
  }, []);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <SHeader>
      <nav
        className={`navbar ${showLinks ? "show-nav" : "hide-nav"} ${
          y === 0 ? "navbar" : "navbarsolid"
        }`}
      >
        <div className="searchbar">Searchbar</div>
        <img
          className="navbar_logo"
          src="src/assets/cinerama.png"
          alt="logo cinerama"
        />
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1 ">
            <a href="/" className="navbar_link">
              Weekly upcomings
            </a>
          </li>
          <li className="navbar_item slideInDown-2">
            <a href="/" className="navbar_link">
              Suggerator / filters
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
