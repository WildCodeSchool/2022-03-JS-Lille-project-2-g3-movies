import { useState } from "react";
import { Link } from "react-router-dom";
import SHeader from "./style";
import cinerama from "../../assets/cinerama.png";
import search from "../../assets/searchLogo.png";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const [textEntered, setTextEntered] = useState("");

  const handleChange = (e) => {
    setTextEntered(e.target.value);
  };

  return (
    <SHeader>
      <nav className={`navBar ${showLinks ? "showNav" : "hideNav"}`}>
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleChange}
          />
          <Link to={`/searchresult/${textEntered}`}>
            <button type="submit">
              <img src={search} alt="searchLogo" id="searchLogo" />
            </button>
          </Link>
        </form>
        <Link to="/">
          <img className="navBarLogo" src={cinerama} alt="logo cinerama" />
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
          <li className="navBarItem slideInDown2">
            <Link to="/userlist" className="navBarLink">
              My watch list
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
