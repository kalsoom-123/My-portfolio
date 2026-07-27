import heroVideo from "../assets/hero-bg.mp4";
import techImg from "../assets/imgggg.png";
import { FaCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaShopify } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
// import emailjs from "@emailjs/browser";
function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const phoneNumber = "923397112244";

    const text = `Hello! New Message:%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    e.target.reset();
  };


  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "WordPress", icon: <FaWordpress color="#21759B" /> },
    { name: "Shopify", icon: <FaShopify color="#96BF48" /> },
  ]
  return (
    <>
      {/* HERO (FULL WIDTH) */}
      <section className="hero hero-video">
        <video className="hero-video-bg" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-left full-width">
          <h1>
            Hi, I'm <span className="gradient-text">Kalsoom</span> 👩‍💻
          </h1>

          <h2 className="sub-heading">
            Frontend • WordPress • Shopify Developer
          </h2>

          <p className="hero-desc">
            I craft modern, high-performance websites with clean UI, smooth UX,
            and scalable solutions for businesses and brands.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Hire Me
            </button>

            <button className="btn-primary">
              {/* View Projects */}
            </button>
          </div>
        </div>
      </section>

      {/* PAGE CONTENT INSIDE CONTAINER */}
      <div className="container">

<section className="about modern-section">
  <h2 className="section-title" data-aos="fade-up">
    <span className="line"></span>
    <span className="dot"></span>
    About Me
    <span className="dot"></span>
    <span className="line"></span>
  </h2>
  <p>Who I am & what I do</p>

  <div className="about-content">
    {/* Text side */}
    <div className="about-text">
      <p>
        I'm a <strong>Frontend Developer</strong> passionate about building sleek and responsive websites.
        I specialize in <strong>React, WordPress, Shopify, and modern JavaScript</strong> technologies.
      </p>
      <p>
        With over <strong>2 years of experience</strong>, I create fast, scalable, and user-focused web solutions 
        that help brands achieve their online goals. I love turning complex problems into simple, 
        beautiful interfaces.
      </p>
      <p>
        My toolbox includes <strong>React, HTML5, CSS3, JavaScript, Tailwind, Bootstrap, Git, and Shopify</strong>. 
        I'm always learning new technologies and improving my workflow to deliver the best results.
      </p>
      <a href="#contact" className="btn-primary">Hire Me</a>
    </div>

    {/* Tech image side */}
    <div className="about-image">
      <img src={techImg} alt="Tech Stack" />
    </div>
  </div>
</section>

        {/* SKILLS */}
        <section className="skills">
          <h2 className="section-title" data-aos="fade-up">
  <span className="line"></span>
  <span className="dot"></span>
  My Skills
  <span className="dot"></span>
  <span className="line"></span>
</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
<section className="services modern-section">
  <h2 className="section-title" data-aos="fade-up">
    <span className="line"></span>
    <span className="dot"></span>
    Services
    <span className="dot"></span>
    <span className="line"></span>
  </h2>

  <div className="services-grid">
    <div className="service-card" data-aos="fade-up" data-aos-delay="100">
      <h3>Frontend Development</h3>
      <p>Modern responsive UI using React & JavaScript.</p>
    </div>

    <div className="service-card" data-aos="fade-up" data-aos-delay="200">
      <h3>WordPress</h3>
      <p>Custom themes and business websites.</p>
    </div>

    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
      <h3>Shopify</h3>
      <p>Professional eCommerce store design.</p>
    </div>
  </div>
</section>

        {/* PROJECTS */}
        <section className="projects-preview">
  <h2 className="section-title" data-aos="fade-up">
    <span className="line"></span>
    <span className="dot"></span>
    Projects
    <span className="dot"></span>
    <span className="line"></span>
  </h2>

  <div className="projects-grid">
    <div className="project-card">
      <h3>Crazy Cones</h3>
      <p>An e-commerce ice cream store website with smooth animations and product gallery.</p>
  <a
    className="project-link"
    href="https://crazycones.dk/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
    </div>
    <div className="project-card">
      <h3>Smile Shift</h3>
      <p>A moving services company website with clean UI and interactive project sections.</p>
  <a
    className="project-link"
    href="https://smileshiftrelocations.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
    </div>
    <div className="project-card">
      <h3>SMMotocross</h3>
      <p>A motocross event and team website with dynamic content, interactive gallery, and responsive layout.</p>
  <a
    className="project-link"
    href="https://smmotocross.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
    </div>
    <div className="project-card">
      <h3>Educatia</h3>
      <p>An online education platform offering courses and interactive lessons with a user-friendly dashboard.</p>
  <a
    className="project-link"
    href="https://educatia.pk/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
    </div>
    <div className="project-card">
      <h3>Eagle Soft</h3>
      <p>A software solutions company website highlighting services, portfolio, and client testimonials.</p>
  <a
    className="project-link"
    href="https://eagale.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
    </div>
    <div className="project-card">
  <h3>Lones Bonsai</h3>
  <p>
    A Shopify-based bonsai store featuring a modern design, product collections,
    secure shopping experience, and a responsive user interface.
  </p>
  <a
    className="project-link"
    href="https://lonesbonsai.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
</div>
  </div>

 
</section>

        {/* EXPERIENCE */}
        <section className="experience">
  <h2 className="section-title" data-aos="fade-up">
    <span className="line"></span>
    <span className="dot"></span>
    Experience
    <span className="dot"></span>
    <span className="line"></span>
  </h2>

  <div className="experience-grid">
  {/* Devlogix Learning */}
  <div className="experience-card" data-aos="fade-up">
    <h3>HTML, CSS & JavaScript</h3>
    <span className="experience-company">Devlogix</span>
    <span className="experience-duration">Learning Period</span>
    <p>
      Learned core web development skills, including HTML, CSS, and JavaScript,
      building responsive and interactive websites.
    </p>
  </div>

  {/* Technical Mentors Internship */}
  <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
    <h3>WordPress Developer(Job)</h3>
    <span className="experience-company">Technical Mentors</span>
    <span className="experience-duration">6 Months</span>
    <p>
      Learned WordPress development, theme customization, and plugin integration.
      Gained hands-on experience with building functional websites.
    </p>
  </div>

  {/* Technical Mentors Job */}
  <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
    <h3>Frontend Developer</h3>
    <span className="experience-company">Technical Mentors</span>
    <span className="experience-duration">1 Year</span>
    <p>
      Worked as a WordPress developer, building and maintaining client websites.
      Improved skills in responsive design, optimization, and project management.
    </p>
  </div>

  {/* Eagale Soft Job */}
  <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
    <h3>React & Shopify & WordPress Developer</h3>
    <span className="experience-company">Eagale Soft</span>
    <span className="experience-duration">1Year – Ongoing</span>
    <p>
      Developing modern React applications and Shopify e-commerce stores.
      Enhancing UI/UX, implementing interactive features, and building scalable web projects.
    </p>
  </div>
</div>
</section>



<section id="contact" className="contact-home modern-section">
  <h2 className="section-title">
    <span className="line"></span>
    <span className="dot"></span>
    Contact Me
    <span className="dot"></span>
    <span className="line"></span>
  </h2>

  <p className="contact-subtext">
    Have a project in mind or want to work together? Let’s connect.
  </p>

  <div className="contact-wrapper">
    
    {/* LEFT SIDE */}
    <div className="contact-info">
      <span className="contact-eyebrow">Available for new opportunities</span>
      <h3>Let’s talk about your project</h3>

      <p>
        I’m available for freelance work, collaborations, or full-time opportunities.
        Feel free to reach out anytime.
      </p>

      <div className="contact-details">
        <div className="contact-detail">
          <span>Email</span>
          <a href="mailto:kaloomakhtarrr93@gmail.com">kaloomakhtarrr93@gmail.com</a>
        </div>
        <div className="contact-detail">
          <span>Based in</span>
          <p>Gujranwala, Pakistan</p>
        </div>
      </div>

      <a
        href="https://wa.me/923397112244"
        target="_blank"
        className="btn-primary"
      >
        Chat on WhatsApp
      </a>
    </div>

    {/* RIGHT SIDE FORM */}
   {/* RIGHT SIDE FORM */}
<form className="contact-form" onSubmit={handleSubmit}>
  <h3>Send a message</h3>
  <p>Tell me a little about your project and I’ll get back to you.</p>
  <label>
    Your name
    <input type="text" name="name" placeholder="Enter your name" required />
  </label>
  <label>
    Email address
    <input type="email" name="email" placeholder="you@example.com" required />
  </label>
  <label>
    Your message
    <textarea name="message" placeholder="How can I help?" required></textarea>
  </label>

  <button type="submit" className="btn-primary">
    Send Message
  </button>
</form>

  </div>
</section>

        {/* CTA */}
        <section className="cta">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's build it!</p>
        </section>
      </div>
    </>
  )
}

export default Home;
