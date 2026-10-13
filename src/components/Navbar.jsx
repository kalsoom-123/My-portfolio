import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["About", "Skills", "Services", "Work", "Experience", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo("home")} aria-label="Kalsoom Dev home">
              <img
                src="/kalsdev_logo.png"
                alt=""
                width="112"
                height="112"
                style={{ objectFit: "contain" }}
              />
        </button>
        <div className={`nav-menu ${open ? "is-open" : ""}`}>
          {links.map((link) => <button key={link} onClick={() => goTo(link)}>{link}</button>)}
        </div>
        <div className="nav-actions">
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
