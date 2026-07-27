import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  // ✅ Load saved theme or default to light
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // ✅ Apply dark/light class to <body>
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);

    // ✅ Save preference
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
    <Cursor />
      {/* Pass darkMode state & setter to Navbar for toggle button */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <a
    href="https://wa.me/923397112244"  // 👈 replace with your number
    className="whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>
    </BrowserRouter>
  );
}

export default App;