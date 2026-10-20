import { useState } from "react";
import React from "react";

// Updated with your real profile, education, projects, skills, and interests
const profile = {
  name: "Stephen Bantu Mukolwe",
  role: "IT Support Specialist & Front-End Developer",
  location: "Nairobi, Kenya",
  email: "mukolwestephen3@gmail.com",
  github: "https://github.com/users/Mukolw/projects",
  intro:
    "Dedicated IT support specialist and developer with extensive experience in troubleshooting, network management, and user support.",
  about:
    "Dedicated IT support specialist with extensive experience in troubleshooting, network management, and user support. Proven ability to resolve complex technical issues and improve system efficiency. Seeking to apply my technical and interpersonal skills in a challenging role that fosters growth and innovation.",

  education: [
    {
      degree: "Bachelor of Science in Mathematics and Computer Science",
      institution: "Technical University of Mombasa, Kenya",
      period: "2018 – 2022",
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Musanda Secondary School, Kenya",
      period: "2014 – 2017",
    },
    {
      degree: "Kenya Certificate of Primary Education (KCPE)",
      institution: "Musanda Primary School, Kenya",
      period: "2006 – 2013",
    },
  ],

  technicalSkills: {
    programming: [
      "Python (Application Development)",
      "SQL (Database Design, Queries, Data Management)",
    ],
    itSupport: [
      "Network Troubleshooting",
      "Software Installation & Configuration",
      "Data Security & Backup",
    ],
    creativeEditing: [
      "Photoshop (Photo Editing)",
      "Adobe Illustrator",
      "Adobe Premiere Pro (Video Editing)",
    ],
    dataTools: [
      "Microsoft Excel (Pivot Tables, Data Analysis, Reporting)",
      "Microsoft Word & PowerPoint (Documentation & Presentations)",
    ],
    other: ["Data Entry & Management"],
  },

  professionalSkills: [
    "Communication & Reporting",
    "Team Collaboration",
    "Time Management",
    "Problem Solving",
    "Adaptability",
  ],

  languages: ["English", "Kiswahili"],

  interests: [
    "Playing musical instruments",
    "Reading books",
    "Hiking and outdoor activities",
    "Swimming",
  ],

  projects: [
    {
      number: "01",
      title: "Loan Application System",
      type: "Python · SQL · Back-End & UI",
      text: "Designed and developed a functional loan application system to automate loan processing. Implemented user authentication, eligibility logic, and an integrated SQL database for secure data management.",
      color: "mint",
      mark: "✳",
    },
  ],
};

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label={`${profile.name}, home`}
        >
          <span className="logo-mark">s.</span>
          <span>{profile.name}</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {[
            ["About", "#about"],
            ["Experience & Education", "#education"],
            ["Skills", "#skills"],
            ["Work", "#work"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={`mailto:${profile.email}`}
            onClick={closeMenu}
          >
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span> AVAILABLE FOR NEW
              OPPORTUNITIES
            </div>
            <h1>
              Solving technical
              <br />
              problems with <span>precision.</span>
            </h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                Get in touch <Arrow diagonal />
              </a>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract technical graphic"
            role="img"
          >
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-sun"></div>
            <div className="art-card">
              <span>
                IT SUPPORT
                <br />
                & SYSTEMS
                <br />
                SPECIALIST.
              </span>
              <i>✳</i>
            </div>
            <span className="art-caption">SUPPORT / BUILD / INNOVATE</span>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✦</span>
          </div>
          <div className="hero-foot">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line"></span>
            <span>{profile.location}</span>
          </div>
        </section>

        {/* ABOUT & PROFESSIONAL SUMMARY */}
        <section className="about section-wrap" id="about">
          <div className="section-label">
            <span>01</span> PROFESSIONAL SUMMARY
          </div>
          <div className="about-content">
            <h2>
              Driven by efficiency.
              <br />
              <span>Built on experience.</span>
            </h2>
            <div className="about-details">
              <p>{profile.about}</p>

              <div className="skills" style={{ marginTop: "2rem" }}>
                <span className="mini-label">LANGUAGES</span>
                <div
                  className="skill-list"
                  style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}
                >
                  {profile.languages.map((lang) => (
                    <span className="skill-pill" key={lang}>
                      {lang}
                    </span>
                  ))}
                </div>

                <span className="mini-label">PROFESSIONAL SKILLS</span>
                <div className="skill-list" style={{ marginTop: "0.5rem" }}>
                  {profile.professionalSkills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL & CREATIVE SKILLS */}
        <section
          className="about section-wrap"
          id="skills"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="section-label">
            <span>02</span> TECHNICAL EXPERTISE
          </div>
          <div className="about-content">
            <h2>
              Technical stack &amp;
              <br />
              <span>creative tools.</span>
            </h2>
            <div
              className="about-details"
              style={{ display: "grid", gap: "1.5rem" }}
            >
              <div>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.7,
                    marginBottom: "0.5rem",
                  }}
                >
                  PROGRAMMING &amp; DATABASES
                </h4>
                <div className="skill-list">
                  {profile.technicalSkills.programming.map((s) => (
                    <span className="skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.7,
                    marginBottom: "0.5rem",
                  }}
                >
                  IT SUPPORT &amp; SYSTEMS
                </h4>
                <div className="skill-list">
                  {profile.technicalSkills.itSupport.map((s) => (
                    <span className="skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.7,
                    marginBottom: "0.5rem",
                  }}
                >
                  MULTIMEDIA &amp; DESIGN
                </h4>
                <div className="skill-list">
                  {profile.technicalSkills.creativeEditing.map((s) => (
                    <span className="skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.7,
                    marginBottom: "0.5rem",
                  }}
                >
                  DATA &amp; REPORTING TOOLS
                </h4>
                <div className="skill-list">
                  {profile.technicalSkills.dataTools.map((s) => (
                    <span className="skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & QUALIFICATIONS */}
        <section
          className="about section-wrap"
          id="education"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="section-label">
            <span>03</span> EDUCATION
          </div>
          <div className="about-content">
            <h2>
              Educational background
              <br />
              <span>&amp; credentials.</span>
            </h2>
            <div
              className="about-details"
              style={{ display: "grid", gap: "1.5rem" }}
            >
              {profile.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    paddingBottom: "1rem",
                    borderBottom:
                      idx !== profile.education.length - 1
                        ? "1px solid rgba(0,0,0,0.05)"
                        : "none",
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ opacity: 0.8, marginTop: "0.2rem" }}>
                    {edu.institution} | {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="work section-wrap" id="work">
          <div className="work-heading">
            <div>
              <div className="section-label">
                <span>04</span> FEATURED PROJECT
              </div>
              <h2>
                Loan Application System<span>.</span>
              </h2>
            </div>
            <p>
              Built to automate processing,
              <br />
              secure data, and streamline workflows.
            </p>
          </div>
          <div className="project-grid">
            {profile.projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
                style={{ gridColumn: "span 3" }}
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`project-art ${project.color}`}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span className="project-number">
                    PROJECT / PYTHON &amp; SQL
                  </span>
                  <span className="project-symbol">{project.mark}</span>
                  <span className="project-art-title">{project.title}</span>
                  <span className="project-open">
                    <Arrow diagonal />
                  </span>
                </a>
                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>
                  <p className="project-description">{project.text}</p>
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      View GitHub Repository <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERESTS & HOBBIES */}
        <section
          className="about section-wrap"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="section-label">
            <span>05</span> BEYOND WORK
          </div>
          <div className="about-content">
            <h2>
              Interests &amp;
              <br />
              <span>hobbies.</span>
            </h2>
            <div className="about-details">
              <div className="skill-list">
                {profile.interests.map((hobby) => (
                  <span className="skill-pill" key={hobby}>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section-wrap" id="contact">
          <div className="contact-inner">
            <div className="section-label">
              <span>06</span> LET'S CONNECT
            </div>
            <h2>
              Ready to work
              <br />
              <span>together?</span>
            </h2>
            <p>
              I’m always open to discussing IT support roles, development
              projects, or creative collaborations.
            </p>
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Say hello <Arrow diagonal />
            </a>
            <span className="contact-decoration">✳</span>
          </div>
        </section>
      </main>

      <site-footer
        className="site-footer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <a className="wordmark" href="#home">
          <span className="logo-mark">s.</span>
          <span>{profile.name}</span>
        </a>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href={`mailto:${profile.email}`}>
          {profile.email} <Arrow diagonal />
        </a>
      </site-footer>
    </>
  );
}
