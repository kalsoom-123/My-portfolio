import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main><Home /></main>
      <Footer />
      <a className="whatsapp-btn" href="https://wa.me/923397112244" target="_blank" rel="noreferrer" aria-label="Chat with Kalsoom on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;
