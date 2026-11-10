import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from 'lucide-react'

import Reveal from './components/Reveal'
import SectionHeading from './components/SectionHeading'
import ProjectVisual from './components/ProjectVisual'
import { links, skillGroups, projects, profiles } from './data/portfolioData'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formError, setFormError] = useState('')
  const [formState, setFormState] = useState('idle')
  const [copied, setCopied] = useState(false)

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFormError('Please complete all fields before submitting.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError('Please enter a valid email address.')
      return
    }

    setFormError('')

    const body = `Hi Aryan,\n\n${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`
    window.location.href = `mailto:aryansingh17806@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setFormState('mailto')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aryansingh17806@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:aryansingh17806@gmail.com'
    }
  }

  return (
    <div className={light ? 'app light' : 'app'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark"><Code2 size={17} /></span>
          <span>
            Aryan Singh<span className="brand-period">.</span>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" aria-label="Toggle theme" onClick={() => setLight(!light)}>
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className="nav-resume" href="/Aryan-Singh-Resume.pdf" download>
            Resume <Download size={14} />
          </a>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <Reveal>
              <div className="availability"><span className="pulse-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Hi, I’m Aryan
                <br />
                <span className="gradient-text">Singh.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="hero-tagline">
                Building scalable applications
                <br className="desktop-break" />
                and solving complex problems<span className="blue-period">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="hero-description">
                I’m a Computer Science undergraduate passionate about software engineering, full-stack development,
                and Data Structures & Algorithms. I enjoy transforming ideas into practical, scalable digital products.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="hero-buttons">
                <a className="btn-primary" href="#projects">
                  View My Projects <ArrowUpRight size={16} />
                </a>
                <a className="btn-secondary" href="/Aryan-Singh-Resume.pdf" download>
                  <Download size={15} /> Download Resume
                </a>
              </div>
              <a className="text-link hero-connect" href="#contact">
                Let’s connect <ArrowRight size={14} />
              </a>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="hero-stats">
                <div><b>AIR 182</b><span>TCS CodeVita ’25</span></div>
                <div><b>700<span>+</span></b><span>DSA problems</span></div>
                <div><b>1675</b><span>LeetCode rating</span></div>
                <div><b>11<span>+</span></b><span>Algorithms visualized</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="hero-art-wrap">
            <div className="hero-art">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-core">
                <div className="core-glow" />
                <div className="avatar-symbol"><Code2 size={72} strokeWidth={1.25} /></div>
                <span className="core-caption">BUILD · LEARN · REPEAT</span>
              </div>
              <div className="float-chip chip-java"><span className="tech-icon java">J</span> Java</div>
              <div className="float-chip chip-react"><span className="react-symbol">✳</span> React</div>
              <div className="float-chip chip-node"><span className="tech-icon node">N</span> Node.js</div>
              <div className="float-chip chip-python"><span className="tech-icon python">Py</span> Python</div>
              <div className="float-chip chip-mongo"><span className="tech-icon mongo">M</span> MongoDB</div>

              <div className="terminal-card">
                <div className="terminal-head">
                  <span />
                  <span />
                  <span />
                  <small>developer.js</small>
                </div>
                <pre>{`const developer = {
  name: "Aryan Singh",
  role: "Software Developer",
  focus: ["DSA", "Full Stack", "Problem Solving"],
  status: "Building & Learning"
};`}</pre>
              </div>
            </div>
          </Reveal>

          <a href="#about" className="scroll-cue">
            <span /> SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </section>

        <section id="about" className="section-wrap section-block">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Engineering curiosity
                <br />
                <span className="muted-heading">into real-world impact.</span>
              </>
            }
          />
          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                I’m Aryan Singh, a Computer Science undergraduate at <strong>GLA University, Mathura</strong>. I have a strong interest in software development, problem-solving, and building full-stack applications.
              </p>
              <p>
                I secured <strong>All India Rank 182 in TCS CodeVita 2025</strong> among 25,000+ participants and have solved over 600 Data Structures & Algorithms problems on LeetCode.
              </p>
              <p>
                I enjoy exploring new technologies, designing efficient systems, and developing applications that solve real-world problems.
              </p>
              <div className="about-note">
                <Sparkles size={17} />
                <span>Driven by curiosity. Focused on building things that matter.</span>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="education-card">
              <div className="education-top">
                <span className="icon-tile"><GraduationCap size={20} /></span>
                <span className="card-kicker">EDUCATION</span>
              </div>
              <h3>B.Tech, Computer Science</h3>
              <p className="uni">GLA University, Mathura</p>
              <div className="education-details">
                <div>
                  <span>EXPECTED GRADUATION</span>
                  <b>June 2028</b>
                </div>
                <div>
                  <span>CPI</span>
                  <b>7.53 <small>/ 10</small></b>
                </div>
                <div>
                  <span>LOCATION</span>
                  <b><MapPin size={13} /> Mathura, India</b>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-wrap section-block">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title={
              <>
                Technical skills<span className="blue-period">.</span>
              </>
            }
            copy="A practical toolkit across the stack, backed by computer science fundamentals and a continuous learning mindset."
          />
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon
              return (
                <Reveal key={group.title} delay={i * 0.045} className="skill-card">
                  <div className="skill-card-head">
                    <span className="icon-tile"><Icon size={18} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="experience" className="section-wrap section-block">
          <SectionHeading
            eyebrow="WHERE I’VE GROWN"
            title={
              <>
                Experience<span className="blue-period">.</span>
              </>
            }
            copy="Early professional experience applying technical skills to practical business systems."
          />
          <Reveal className="experience-card">
            <div className="timeline-rail"><span /></div>
            <div className="experience-content">
              <div className="experience-meta">
                <span className="experience-type"><BriefcaseBusiness size={14} /> INTERNSHIP</span>
                <span>JUNE 2026 — JULY 2026</span>
              </div>
              <h3>Salesforce Intern Trainee</h3>
              <p className="company">Astrea IT Services <span>·</span> Noida, India</p>
              <ul>
                <li>Configured four Salesforce CRM component types, including custom objects, fields, reports, and dashboards.</li>
                <li>Worked across security, data management, workflow automation, and CRM customization.</li>
                <li>Assisted in business-process workflow configuration and CRM component customization for enterprise use cases.</li>
              </ul>
              <div className="experience-tags">
                <span>Salesforce CRM</span>
                <span>Workflow Automation</span>
                <span>Data Management</span>
                <span>CRM Customization</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="section-wrap section-block">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                Things I’ve built<span className="blue-period">.</span>
              </>
            }
            copy="A few projects where I’ve combined engineering fundamentals with a focus on useful, thoughtful experiences."
          />
          <div className="projects-list">
            {projects.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08} className="project-card">
                <div className="project-topline">
                  <span>FEATURED PROJECT&nbsp; / &nbsp;{p.number}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <ProjectVisual type={p.visual} />
                <div className="project-info">
                  <div className="project-main">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="project-tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-details">
                    <span className="detail-label">HIGHLIGHTS</span>
                    {p.features.map((feature) => (
                      <div className="feature-line" key={feature}><Check size={14} />{feature}</div>
                    ))}
                    <div className="project-actions">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary">
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary">
                        GitHub <Github size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-wrap section-block">
          <SectionHeading
            eyebrow="MILESTONES"
            title={
              <>
                A few proud moments<span className="blue-period">.</span>
              </>
            }
            copy="Consistent practice, competitive problem-solving, and a commitment to learning."
          />
          <div className="achievement-grid">
            <Reveal className="achievement-card achievement-feature">
              <span className="achievement-icon"><Trophy size={21} /></span>
              <b className="achievement-number">182<span>nd</span></b>
              <h3>All India Rank · TCS CodeVita 2025</h3>
              <p>Among 25,000+ participants. Rank 1 at GLA University.</p>
              <span className="achievement-foot">COMPETITIVE PROGRAMMING</span>
            </Reveal>
            <Reveal delay={0.06} className="achievement-card">
              <span className="achievement-icon"><Code2 size={20} /></span>
              <b className="achievement-number">700<span>+</span></b>
              <h3>DSA Problems Solved</h3>
              <p>LeetCode problem-solving milestone.</p>
              <span className="achievement-foot">CONSISTENT PRACTICE</span>
            </Reveal>
            <Reveal delay={0.12} className="achievement-card">
              <span className="achievement-icon"><Award size={20} /></span>
              <b className="achievement-number">1675</b>
              <h3>LeetCode Contest Rating</h3>
              <p>Within the top 15% of contest participants.</p>
              <span className="achievement-foot">CONTEST PERFORMANCE</span>
            </Reveal>
            <Reveal delay={0.18} className="achievement-card">
              <span className="achievement-icon"><GraduationCap size={20} /></span>
              <b className="achievement-number cert-number">3<span>×</span></b>
              <h3>Technical Certifications</h3>
              <p>React.js, Java, and Data Structures & Algorithms from Physics Wallah.</p>
              <span className="achievement-foot">CONTINUOUS LEARNING</span>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap section-block coding-section">
          <SectionHeading
            eyebrow="FIND ME ONLINE"
            title={
              <>
                Let’s connect & collaborate<span className="blue-period">.</span>
              </>
            }
            copy="More of my code, problem-solving journey, and professional updates."
          />
          <div className="profile-grid">
            {profiles.map((profile, i) => {
              const Icon = profile.icon
              return (
                <Reveal key={profile.name} delay={i * 0.07}>
                  <a href={profile.url} target="_blank" rel="noreferrer" className="profile-card">
                    <div className="profile-top">
                      <span className="profile-icon"><Icon size={20} /></span>
                      <ArrowUpRight size={17} />
                    </div>
                    <h3>{profile.name}</h3>
                    <p>{profile.detail}</p>
                    <div className="profile-metric">{profile.metric}</div>
                    <span className="profile-label">{profile.label}</span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="contact" className="section-wrap section-block contact-section">
          <div className="contact-panel">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="GET IN TOUCH"
                title={
                  <>
                    Let’s build something
                    <br />
                    <span className="gradient-text">great together.</span>
                  </>
                }
                copy="I’m always interested in connecting with developers, recruiters, and people working on exciting ideas. Feel free to reach out!"
              />
              <div className="contact-methods">
                <a href="mailto:aryansingh17806@gmail.com">
                  <span className="contact-method-icon"><Mail size={17} /></span>
                  <span>
                    <small>EMAIL ME</small>
                    <b>aryansingh17806@gmail.com</b>
                  </span>
                  <ArrowUpRight size={15} />
                </a>
                <div>
                  <span className="contact-method-icon"><MapPin size={17} /></span>
                  <span>
                    <small>BASED IN</small>
                    <b>Mathura, Uttar Pradesh, India</b>
                  </span>
                </div>
                <button onClick={copyEmail}>
                  <span className="contact-method-icon">{copied ? <Check size={17} /> : <AtSign size={17} />}</span>
                  <span>
                    <small>{copied ? 'COPIED TO CLIPBOARD' : 'QUICK CONTACT'}</small>
                    <b>{copied ? 'Email address copied' : 'Copy email address'}</b>
                  </span>
                </button>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitForm} noValidate>
              <div className="form-heading">
                <span>HAVE A PROJECT IN MIND?</span>
                <h3>Send me a message</h3>
              </div>

              <div className="form-row">
                <label>
                  Your name
                  <input name="name" value={form.name} onChange={updateForm} placeholder="Jane Smith" autoComplete="name" />
                </label>
                <label>
                  Email address
                  <input name="email" value={form.email} onChange={updateForm} placeholder="jane@company.com" type="email" autoComplete="email" />
                </label>
              </div>

              <label>
                Subject
                <input name="subject" value={form.subject} onChange={updateForm} placeholder="Let’s work together" />
              </label>

              <label>
                Message
                <textarea name="message" value={form.message} onChange={updateForm} placeholder="Tell me a little about what you have in mind..." rows="4" />
              </label>

              {formError && <p className="form-error" role="alert">{formError}</p>}
              {formState === 'mailto' && (
                <p className="form-success" role="status">
                  Your email app should open with the message pre-filled. Nothing is sent by this website.
                </p>
              )}

              <button className="btn-primary send-btn" type="submit">
                Send Message <Send size={15} />
              </button>

              <p className="form-note">This form opens your email app. It does not send data to a server.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark"><Code2 size={17} /></span>
          <span>
            Aryan Singh<span className="brand-period">.</span>
          </span>
        </a>
        <p>Designed & Built by Aryan Singh</p>
        <div className="footer-socials">
          <a href="https://github.com/Aryan-17806" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/aryan-singh-1a1143325/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="https://leetcode.com/u/Aryan_1786/" aria-label="LeetCode" target="_blank" rel="noreferrer"><Code2 size={17} /></a>
          <a href="mailto:aryansingh17806@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
        <div className="copyright">© 2026 Aryan Singh. All Rights Reserved.</div>
      </footer>
    </div>
  )
}

export default App
