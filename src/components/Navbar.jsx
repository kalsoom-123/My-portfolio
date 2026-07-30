import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = ["About", "Services", "Work", "Experience", "Contact"];

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark">K.</span><span>Kalsoom Akhtar</span>
        </button>
        <div className={`nav-menu ${open ? "is-open" : ""}`}>
          {links.map((link) => <button key={link} onClick={() => goTo(link)}>{link}</button>)}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle colour theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
