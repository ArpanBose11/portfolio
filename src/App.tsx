import { useEffect, useRef, useState } from "react"
import heroImg from "./imports/file_0000000079207207bb1e293b79bba92f.png"
import project1Cover from "./imports/project1.png"
import project2Cover from "./imports/project2.png"
import ashokFactory from "./imports/ashok-factory.jpg"
import alTicsResults from "./imports/al-tics-results.png"
import digitalEsk from "./imports/digital-esk.png"
import visionCheck from "./imports/vision-check.png"
import citiusGroup from "./imports/citius-group.jpg"

const EMAIL = "arpanbose.2k@gmail.com"
const filters = ["All projects", "AI & automation", "Data & systems"] as const
type Filter = (typeof filters)[number]
type Project = {
  id: string
  name: string
  subtitle: string
  description: string
  category: Exclude<Filter, "All projects">
  tags: string[]
  image?: string
  presentation?: string
}

const projects: Project[] = [
  {
    id: "01", name: "GitBuddy", subtitle: "A better starting point for developers.",
    description: "A Telegram assistant that turns natural-language requirements into open-source recommendations. Built with n8n, OpenAI and the GitHub API to make discovery simpler and help teams get building sooner.",
    category: "AI & automation", tags: ["LLMs", "n8n", "GitHub API"], image: project1Cover,
    presentation: "GitBuddy-Presentation.html",
  },
  {
    id: "02", name: "PersonaLab", subtitle: "Real questions. Synthetic perspectives.",
    description: "A multi-agent environment that simulates customer personas, interactions and scenarios. A low-cost sandbox for exploring products, messaging and go-to-market decisions before real-world research.",
    category: "AI & automation", tags: ["Multi-agent AI", "Simulation", "LLMs"], image: project2Cover,
    presentation: "PersonaLab-Presentation.html",
  },
  {
    id: "03", name: "Note Detective", subtitle: "Finding the signal in the sound.",
    description: "An audio-fingerprinting system built with Python and SQL for accurate song recognition and scalable retrieval. Turning a signal-processing challenge into a dependable, queryable service for large music catalogs.",
    category: "Data & systems", tags: ["Python", "SQL", "Signal processing"],
  },
  {
    id: "04", name: "Smart Contracts", subtitle: "Less friction. More transparency.",
    description: "A decentralized smart-contract solution for transparent, automated transactions. Exploring how blockchain can reduce intermediaries, transaction costs and settlement risk.",
    category: "Data & systems", tags: ["Blockchain", "Smart contracts", "Web3"],
    presentation: "Smart-Contract-Presentation.html",
  },
]

const checkpoints = [
  { name: "AL-TICS", label: "ML tyre identification · Live pilot", description: "Scan the vehicle, capture two guided tyre photos, read make with an on-device CNN and size with OCR, then validate against the approved build.", result: "~7 min → 10–30 sec", note: "267 tyres · 100% pass rate in the pilot", image: alTicsResults, alt: "AL-TICS tyre identification pilot findings" },
  { name: "Digital ESK", label: "Wiring diagram retrieval · Live pilot", description: "A version-controlled digital lookup replaces physical folders, filtering the correct wiring variant and showing the approved version at the station.", result: "~11 min → under 30 sec", note: "Wrong-variant picks nearly eliminated", image: digitalEsk, alt: "Digital ESK wiring diagram lookup workflow" },
  { name: "Vision Check", label: "Cab-latch verification · Deploy-ready", description: "A camera and detection model designed to confirm clip presence on every cycle, replacing visual-only verification in the operator workflow.", result: "88% → 93% true positive", note: "False negatives reduced from 12% to 7%", image: visionCheck, alt: "Vision Check pilot trial results" },
]

type Detail = { kind: "project"; project: Project } | { kind: "image"; src: string; alt: string }

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} /></svg>
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <img src={project.image} alt={`${project.name} project overview`} loading="lazy" width="768" height="480" />
  if (project.id === "03") return <div className="sound-visual" aria-hidden="true"><div className="visual-label">AUDIO FINGERPRINT / MATCH FOUND</div><div className="waveform">{Array.from({ length: 41 }, (_, i) => <span key={i} style={{ height: `${18 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.27)) * 82}%`, animationDelay: `${i * 35}ms` }} />)}</div><div className="sound-caption"><span>♫</span> Every sound has a signature.</div></div>
  return <div className="contract-visual" aria-hidden="true"><div className="visual-label">DECENTRALIZED / BY DESIGN</div><div className="chain"><span>01</span><i /><span>02</span><i /><span>03</span></div><div className="contract-caption"><span className="status-dot" /> Trust, built into the transaction.</div></div>
}

export default function App() {
  const [filter, setFilter] = useState<Filter>("All projects")
  const [detail, setDetail] = useState<Detail | null>(null)
  const [copyStatus, setCopyStatus] = useState("")
  const dialogRef = useRef<HTMLDialogElement>(null)
  const visibleProjects = projects.filter(project => filter === "All projects" || project.category === filter)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !detail) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [detail])

  useEffect(() => {
    if (!copyStatus) return
    const timeout = window.setTimeout(() => setCopyStatus(""), 5000)
    return () => window.clearTimeout(timeout)
  }, [copyStatus])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyStatus("Email copied. Let's talk!")
    } catch {
      setCopyStatus("Copy unavailable. Use the email link or select the address below.")
    }
  }

  return (
    <div id="top" className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Arpan Bose, home">ab<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">Let’s talk <Arrow diagonal /></a>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">✳</span> ARPAN BOSE / PORTFOLIO</p>
            <h1 id="hero-title">Curiosity.<br />Code.<br /><span>Real impact.</span></h1>
            <p className="hero-description">Hi, I’m Arpan. I turn complex problems into thoughtful solutions at the intersection of <strong>data, AI, and the real world.</strong></p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow diagonal /></a><a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="hero-composition">
            <div className="orbit-text" aria-hidden="true">THINK DEEPLY. BUILD PURPOSEFULLY.</div>
            <figure className="portrait"><img src={heroImg} alt="Arpan Bose at the Ashok Leyland heritage wall" fetchPriority="high" /><figcaption><span className="status-dot" /> Always curious. Always building.</figcaption></figure>
            <div className="portrait-stamp" aria-hidden="true">Ideas<br /><span>into action.</span><Arrow diagonal /></div>
            <div className="floating-note"><span aria-hidden="true">↗</span> From technical detail<br />to business value.</div>
          </div>
          <div className="hero-footer"><span>ANALYTICAL MIND. BUILDER’S INSTINCT.</span><a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas made <em>real.</em></h2></div><p>A few explorations in making technology<br className="desktop-break" /> useful, intuitive, and impactful.</p></div>
            <div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="project-count" role="status">{visibleProjects.length} projects</span></div>
            <div className="project-grid">
              {visibleProjects.map(project => <article className={`project-card project-${project.id}`} key={project.id}>
                <div className="project-art"><ProjectVisual project={project} /><span className="project-number">/{project.id}</span></div>
                <div className="project-meta"><span>{project.category}</span><span>{project.id === "03" ? "PROJECT OVERVIEW" : "CASE STUDY"}</span></div>
                <div className="project-title-row"><h3>{project.presentation ? <a href={`${import.meta.env.BASE_URL}${project.presentation}`} target="_blank" rel="noopener noreferrer">{project.name}<span className="sr-only"> case study (opens in a new tab)</span></a> : <button onClick={() => setDetail({ kind: "project", project })}>{project.name}<span className="sr-only"> project overview</span></button>}</h3><Arrow diagonal /></div>
                <p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
                <ul className="tags" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              </article>)}
            </div>
            <a className="work-github text-link" href="https://github.com/ArpanBose11" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </section>

        <section id="about" className="about-section section-shell" aria-labelledby="about-title">
          <div><p className="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</p><h2 id="about-title">Not just how.<br /><em>But why.</em></h2><div className="about-star" aria-hidden="true">✳</div></div>
          <div className="about-copy"><p className="large-copy">I’m drawn to the space between a difficult problem and a solution that actually helps someone.</p><p>From machine learning models to multi-agent systems, I work on turning data-heavy challenges into simpler products. My experience spans enterprise workflows and the factory floor, where technical decisions meet real operational constraints.</p><p>The thread through it all? Understanding the problem, choosing the right tools, and keeping business value in sight.</p><div className="capabilities"><div><span>01</span><h3>Intelligent systems</h3><p>Machine learning · LLMs · Multi-agent AI</p></div><div><span>02</span><h3>Data into decisions</h3><p>Python · SQL · Data-quality analytics</p></div><div><span>03</span><h3>Practical automation</h3><p>Digital workflows · APIs · Machine vision</p></div></div></div>
        </section>

        <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
          <div className="section-heading"><div><p className="eyebrow">03 / BEYOND THE SIDE PROJECTS</p><h2 id="experience-title">Built for the <em>real world.</em></h2></div><p>Technical thinking.<br />Measurable outcomes.</p></div>
          <article className="experience-card">
            <div className="experience-image"><img src={ashokFactory} alt="Truck assembly line at Ashok Leyland" loading="lazy" /><span>ON THE FACTORY FLOOR</span></div>
            <div className="experience-content"><div className="role-meta"><span>SUMMER INTERN</span><span>2 MONTHS</span></div><h3>Ashok Leyland</h3><p>Turning manual assembly checks into engineered, mistake-proof checkpoints with machine vision, ML and digital workflows across three assembly-line stations.</p><div className="metrics"><div><strong>10–30<span> sec</span></strong><span>Tyre checks, down from ~7 min</span></div><div><strong>12–15<span>%</span></strong><span>Escalations, down from 35–45%</span></div><div><strong>&lt;30<span> sec</span></strong><span>Wiring lookup, down from ~11 min</span></div></div></div>
            <details className="case-study"><summary>Inside the work <span className="summary-toggle" aria-hidden="true">+</span></summary><div className="case-study-body"><div className="case-intro"><div><p className="eyebrow">THE CHALLENGE</p><h4>Quality relied on attention, not the system.</h4><p>Three assembly-line checks were discretionary, fatigue-prone and variant-sensitive. The goal: checkpoints that could not be skipped and left a digital trace.</p></div><div className="case-impact"><strong>128<span> min / shift</span></strong><p>Estimated productive time recovered across the three solutions.</p></div></div><div className="checkpoint-grid">{checkpoints.map(checkpoint => <article key={checkpoint.name}><p className="eyebrow">{checkpoint.label}</p><h4>{checkpoint.name}</h4><p>{checkpoint.description}</p><strong className="checkpoint-result">{checkpoint.result}</strong><small>{checkpoint.note}</small><button className="image-button" onClick={() => setDetail({ kind: "image", src: checkpoint.image, alt: checkpoint.alt })} aria-label={`Enlarge ${checkpoint.name} results`}><img src={checkpoint.image} alt={checkpoint.alt} loading="lazy" /><span>Enlarge image <Arrow diagonal /></span></button></article>)}</div></div></details>
          </article>
          <article className="experience-card secondary-experience"><div className="experience-image"><img src={citiusGroup} alt="Arpan's CitiusTech team" loading="lazy" /><span>ENTERPRISE MEETS AUTOMATION</span></div><div className="experience-content"><div className="role-meta"><span>TRAINEE SOFTWARE ENGINEER</span><span>17 MONTHS</span></div><h3>CitiusTech</h3><p>Enterprise applications, process automation and data-quality analytics. Turning fragmented workflows into simpler, more reliable systems.</p><div className="metrics"><div><strong>100<span>%</span></strong><span>Manual entry eliminated</span></div><div><strong>3</strong><span>Core workflow areas</span></div><div><strong>KPI</strong><span>Data-quality monitoring</span></div></div></div></article>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="section-shell"><p className="eyebrow">04 / NEXT CONVERSATION</p><div className="contact-heading"><h2 id="contact-title">Good things start<br />with <em>a conversation.</em></h2><a className="contact-arrow" href={`mailto:${EMAIL}`} aria-label="Email Arpan Bose"><Arrow diagonal /></a></div><div className="contact-bottom"><div><p>Have an interesting problem, an idea, or just a hello?</p><a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a><button className="copy-button" onClick={copyEmail} aria-label="Copy email address">Copy email <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{copyStatus}</p></div><div className="social-links"><a href="https://www.linkedin.com/in/arpanbose11/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a><a href="https://github.com/ArpanBose11" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a></div></div></div></section>
      </main>
      <footer className="site-footer section-shell"><a className="brand" href="#top" aria-label="Arpan Bose, back to top">ab<span>.</span></a><p>© {new Date().getFullYear()} Arpan Bose. Built with curiosity.</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>

      <dialog ref={dialogRef} className={`detail-dialog ${detail?.kind === "image" ? "image-dialog" : ""}`} aria-labelledby="dialog-title" onCancel={() => setDetail(null)} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setDetail(null) } }}>
        <div className="dialog-header"><h2 id="dialog-title">{detail?.kind === "project" ? detail.project.name : detail?.alt}</h2><button autoFocus onClick={() => setDetail(null)} aria-label="Close dialog">×</button></div>
        {detail?.kind === "project" && <div className="dialog-content"><div className="project-art"><ProjectVisual project={detail.project} /></div><h3>{detail.project.subtitle}</h3><p>{detail.project.description}</p><ul className="tags">{detail.project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>}
        {detail?.kind === "image" && <img className="expanded-image" src={detail.src} alt={detail.alt} />}
      </dialog>
    </div>
  )
}
