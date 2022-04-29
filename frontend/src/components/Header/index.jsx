import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        className={`navBar ${showLinks ? "showNav" : "hideNav"} ${
          y === 0 ? "navBar" : "navBarSolid"
        }`}
      >
        <div className="searchBar">Searchbar</div>

        <Link to="/">
          <img
            className="navBarLogo"
            src="src/assets/cinerama.png"
            alt="logo cinerama"
          />
        </Link>
        <ul className="navBarLinks">
          <li className="navBarItem slideInDown1">
            <Link to="/weeklyupcoming" className="navBarLink">
              Weekly upcomings
            </Link>
          </li>
          <li className="navBarItem slideInDown2">
            <Link to="/suggestion" className="navBarLink">
              Suggest me some movies
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navBarBurger"
          onClick={handleShowLinks}
        >
          <span className="burgerBar" />
        </button>
      </nav>
    </SHeader>
  );
}
