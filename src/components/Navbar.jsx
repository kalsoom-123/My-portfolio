import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo light.png";
import logoDark from "../assets/logo dark.png";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src={darkMode ? logoDark : logoLight} alt="logo" />
</div>

      <div className="nav-links">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> */}

        {/* ✅ NEW TOGGLE BUTTON */}
        <button
  onClick={() => setDarkMode(!darkMode)}
  className={`toggle-switch ${darkMode ? "active" : ""}`}
>
  <div className="switch-circle">
    {darkMode ? <FaMoon /> : <FaSun />}
  </div>
</button>
      </div>
    </nav>
  );
}

export default Navbar;