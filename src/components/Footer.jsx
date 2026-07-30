import { FaArrowUp, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <div><span className="brand-mark">K.</span><p>Designing thoughtful digital experiences.</p></div>
      <p>© {new Date().getFullYear()} Kalsoom Akhtar. All rights reserved.</p>
      <div className="footer-actions"><a href="mailto:kaloomakhtarrr93@gmail.com" aria-label="Email Kalsoom">@</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#home" aria-label="Back to top"><FaArrowUp /></a></div>
    </div>
  </footer>;
}

export default Footer;
