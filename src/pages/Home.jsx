import techImg from "../assets/imgggg.png";
import { FaArrowDown, FaExternalLinkAlt, FaCode, FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaShopify, FaWhatsapp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [{name:"HTML5",icon:<FaHtml5/>},{name:"CSS3",icon:<FaCss3Alt/>},{name:"JavaScript",icon:<SiJavascript/>},{name:"React",icon:<FaReact/>},{name:"Next.js",icon:<SiNextdotjs/>},{name:"WordPress",icon:<FaWordpress/>},{name:"Shopify",icon:<FaShopify/>},{name:"Tailwind",icon:<SiTailwindcss/>}];
const projects = [
  ["Crazy Cones", "E-commerce", "A playful, conversion-led ice cream store with a smooth browsing experience.", "https://crazycones.dk/"],
  ["Smile Shift", "Service website", "A reassuring and easy-to-navigate web presence for a moving company.", "https://smileshiftrelocations.com/"],
  ["SMMotocross", "Community", "A bold, energetic destination for a motocross team and its events.", "https://smmotocross.com/"],
  ["Educatia", "Education", "A clear online learning platform designed to make courses approachable.", "https://educatia.pk/"],
  ["Eagale Soft", "Technology", "A polished company website communicating digital services and expertise.", "https://eagale.com/"],
  ["Lones Bonsai", "Shopify", "A calm, refined storefront for discovering and buying bonsai plants.", "https://lonesbonsai.com/"],
];
const experience = [["Eagale Soft", "React, Shopify & WordPress Developer", "2025 — Present", "Building scalable storefronts and modern frontends with a focus on user experience."],["Technical Mentors", "Frontend Developer", "2024 — 2025", "Delivered responsive client websites and improved performance across projects."],["Technical Mentors", "WordPress Developer", "2023 — 2024", "Customised themes, integrated plugins, and built practical business sites."]];

function SectionHeading({eyebrow, title, copy}) { return <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }

function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const submit = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const message = encodeURIComponent(`Hello Kalsoom!\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`); window.open(`https://wa.me/923397112244?text=${message}`, "_blank"); event.currentTarget.reset(); };
  return <>
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="container hero-content">
        <p className="eyebrow"><span/> Available for freelance work</p>
        <h1>Creating digital spaces that feel <em>effortless.</em></h1>
        <p className="hero-copy">Hi, I’m Kalsoom — a frontend developer who brings brands to life through thoughtful interfaces, powerful storefronts, and great user experiences.</p>
        <div className="hero-buttons"><button className="button button-primary" onClick={() => scrollTo("work")}>Explore my work <FaArrowDown/></button><button className="text-button" onClick={() => scrollTo("contact")}>Let’s work together <FaExternalLinkAlt/></button></div>
        <div className="hero-meta"><span>Frontend developer</span><span>Gujranwala, Pakistan</span><span>React · Next.js · WordPress · Shopify</span></div>
      </div>
    </section>

    <section className="about-section section container" id="about">
      <SectionHeading eyebrow="01 / About me" title="A thoughtful partner for your next digital chapter." />
      <div className="about-layout"><div className="about-copy"><p className="lead">I build clear, confident websites that make it easy for people to connect with your business.</p><p>With over two years of hands-on experience, I blend visual craft with practical development. From a fresh React or Next.js interface to a high-converting Shopify store, I focus on the small details that make a site feel considered.</p><div className="focus-list"><span>Responsive design</span><span>Performance-minded builds</span><span>Clean, maintainable code</span></div><a className="inline-link" href="#contact">Start a conversation <FaExternalLinkAlt/></a></div><div className="about-visual"><img src={techImg} alt="Kalsoom's web development tools"/><div className="mini-card"><FaCode/><span>2+ years<br/><b>building for the web</b></span></div></div></div>
    </section>

    <section className="section skills-section"><div className="container"><SectionHeading eyebrow="02 / Toolkit" title="Tools I use to bring ideas online." /><div className="skills-list">{skills.map(({name,icon}) => <div className="skill-item" key={name}><i>{icon}</i><span>{name}</span></div>)}</div></div></section>

    <section className="section container" id="services"><SectionHeading eyebrow="03 / Services" title="From first thought to final click." copy="I make the web side of your business feel simple, capable, and distinctly yours."/><div className="services-grid">{[["01","Frontend & Next.js","Fast, responsive interfaces and modern Next.js websites built for a smooth experience."],["02","WordPress development","Flexible, easy-to-manage websites built around your team’s needs."],["03","Shopify stores","Purposeful shopping experiences designed to turn browsing into buying."]].map(([no,title,text])=><article className="service-card" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p><FaExternalLinkAlt/></article>)}</div></section>

    <section className="section work-section" id="work"><div className="container"><SectionHeading eyebrow="04 / Selected work" title="A few things I’ve helped bring to life."/><div className="projects-grid">{projects.map(([name,type,text,url],i)=><a className={`project-card project-${i+1}`} href={url} key={name} target="_blank" rel="noreferrer"><div className="project-art"><span>{String(i+1).padStart(2,"0")}</span><b>{name.slice(0,1)}</b></div><div className="project-info"><span>{type}</span><h3>{name}</h3><p>{text}</p><i><FaExternalLinkAlt/></i></div></a>)}</div></div></section>

    <section className="section container" id="experience"><SectionHeading eyebrow="05 / Experience" title="Growing through real work."/><div className="timeline">{experience.map(([company,role,time,text])=><article key={company+role}><div className="timeline-date">{time}</div><div><h3>{role}</h3><h4>{company}</h4><p>{text}</p></div></article>)}</div></section>

    <section className="contact-section" id="contact"><div className="container contact-grid"><div><p className="eyebrow"><span/> Have a project in mind?</p><h2>Let’s make something <em>remarkable.</em></h2><p>I’m available for freelance projects, collaborations, and full-time opportunities.</p><a href="https://wa.me/923397112244" target="_blank" rel="noreferrer" className="contact-whatsapp"><FaWhatsapp/> Chat on WhatsApp</a></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Project details<textarea required name="message" placeholder="Tell me a little about what you’re building..."/></label><button className="button button-primary" type="submit">Send message <FaExternalLinkAlt/></button></form></div></section>
  </>;
}
export default Home;
