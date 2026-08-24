import { Link } from "react-router";
import "./navbar.css";
import { images } from "../../constants/images";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/">
              <img
                className="navbar-logo"
                src={images.appLogoText}
                alt="Logo aplikacji"
              />
            </Link>
          </li>
          <li>
            <Link to="/ranking">Ranking</Link>
          </li>
          <li>
            <Link to="/stats">Statystyki</Link>
          </li>
          <li>
            <Link to="/settings">Ustawienia</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
