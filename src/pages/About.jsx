// import { motion } from "framer-motion";
import "../index.css";

/* ===== Animation Variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===== Section Title ===== */
function SectionTitle({ title }) {
  return (
    <motion.h2
      className="section-title"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <span className="line"></span>
      <span className="dot"></span>
      {title}
      <span className="dot"></span>
      <span className="line"></span>
    </motion.h2>
  );
}

/* ===== Image ===== */
function AboutImage() {
  return (
    <motion.div
      className="about-image"
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src="/images/about.jpg" alt="About me" />
    </motion.div>
  );
}

/* ===== Skills ===== */
function AboutSkills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "WordPress", "Shopify"];

  return (
    <motion.div
      className="about-skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skills.map((skill, i) => (
        <motion.span key={i} variants={fadeUp}>
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ===== Content ===== */
function AboutContent() {
  return (
    <motion.div
      className="about-content"
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3>I’m a Frontend & WordPress Developer</h3>

      <p>
        I build modern, responsive websites using HTML, CSS, JavaScript, React,
        WordPress, and Shopify with a focus on clean UI and smooth UX.
      </p>

      <p>
        I have worked on real-world projects and always aim for performance,
        scalability, and user-friendly design.
      </p>

      <AboutSkills />

      <motion.button
        className="btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.button>
    </motion.div>
  );
}

/* ===== Main Component ===== */
export default function About() {
  return (
    <section className="about-page">
      <div className="container">
        <SectionTitle title="About Me" />

        <div className="about-wrapper">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}