import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.documentElement.style.colorScheme = "dark";
    localStorage.removeItem("darkMode");
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 30,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(frameId);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0xff7a59, 20, 40, 2);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 64, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0xff7a59,
        transparent: true,
        opacity: 0.22,
        roughness: 0.2,
        metalness: 0.55,
        clearcoat: 1,
      })
    );
    scene.add(orb);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        size: 0.03,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
      })
    );
    scene.add(particles);

    const mouse = { x: 0, y: 0 };
    const handlePointerMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      orb.rotation.x += 0.002;
      orb.rotation.y += 0.003;
      particles.rotation.y -= 0.0008;
      particles.rotation.x += 0.0004;

      orb.position.x += (mouse.x * 0.85 - orb.position.x) * 0.03;
      orb.position.y += (mouse.y * 0.75 - orb.position.y) * 0.03;

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      particlesGeometry.dispose();
      orb.geometry.dispose();
      orb.material.dispose();
      particles.material.dispose();
    };
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const introElements = [
      ".intro-logo",
      ".intro-kicker",
      ".intro-name",
      ".intro-role",
      ".intro-welcome",
    ];

    gsap.fromTo(
      introElements,
      { opacity: 0, y: 24, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.12, ease: "power2.out" }
    );
  }, [showIntro]);

  return (
    <>
      <canvas ref={canvasRef} className="portfolio-canvas" aria-hidden="true" />
      <div className={`intro-screen ${showIntro ? "show" : "hide"}`} aria-hidden={!showIntro}>
        <div className="intro-backdrop" />
        <div className="intro-content">
          <div className="intro-frame">
            <div className="intro-orbit intro-orbit-one" />
            <div className="intro-orbit intro-orbit-two" />
            <div className="intro-logo">KA</div>
          </div>

          <div className="intro-text-block">
            <span className="intro-kicker">Creative portfolio</span>
            <h2 className="intro-name">Kalsoom Akhtar</h2>
            <span className="intro-role">Frontend Developer</span>
            <span className="intro-welcome">Welcome to my portfolio</span>
          </div>
        </div>
      </div>

      <div className={`app-shell ${showIntro ? "app-hidden" : "app-visible"}`}>
          <Navbar />
        <main><Home /></main>
        <Footer />
        <a className="whatsapp-btn" href="mailto:kalsoomakhtarrr93@gmail.com" aria-label="Email Kalsoom">
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}

export default App;
