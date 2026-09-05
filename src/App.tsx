import { useEffect, useState } from "react"
import heroImg from "./imports/file_0000000079207207bb1e293b79bba92f.png"
import project1Cover from "./imports/project1.png"
import project2Cover from "./imports/project2.png"
import ashokFactory from "./imports/ashok-factory.jpg"
import alTicsResults from "./imports/al-tics-results.png"
import digitalEsk from "./imports/digital-esk.png"
import visionCheck from "./imports/vision-check.png"
import citiusGroup from "./imports/citius-group.jpg"

const GITBUDDY_URL = `${import.meta.env.BASE_URL}GitBuddy-Presentation.html`
const PERSONA_URL = `${import.meta.env.BASE_URL}PersonaLab-Presentation.html`
const BLOCKCHAIN_URL = `${import.meta.env.BASE_URL}Smart-Contract-Presentation.html`

/** Rounded chip holding a 24-unit brand glyph, centered at (cx,cy). */
function LogoChip({ cx, cy, children }: { cx: number; cy: number; children: React.ReactNode }) {
  const s = 66
  return (
    <g>
      <rect x={cx - s / 2} y={cy - s / 2} width={s} height={s} rx="16"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
      <g transform={`translate(${cx - 12 * 1.55} ${cy - 12 * 1.55}) scale(1.55)`}>{children}</g>
    </g>
  )
}

function AssistantCover() {
  return (
    <img
      className="cover-svg"
      src={project1Cover}
      alt="AI-powered developer assistant"
      loading="lazy"
    />
  )
}

function PersonaCover() {
  return (
    <img
      className="cover-svg"
      src={project2Cover}
      alt="Multi-agent synthetic persona simulation"
      loading="lazy"
    />
  )
}

/* ---------- Data (ordered: Developer Assistant first) ---------- */

type Project = {
  id: string
  num: string
  tags: string[]
  title: string
  short: string
  kicker: string
  story: string
  cover: React.ReactNode
  link?: string
}

const cover = (src: string, alt: string) => (
  <img src={`${src}&w=768&h=480&fit=crop&auto=format`} alt={alt} loading="lazy" />
)

const projects: Project[] = [
  {
    id: "assistant",
    num: "01",
    tags: ["LLMs", "Automation", "GitHub", "n8n"],
    title: "AI-Powered Developer Assistant",
    short: "A Telegram bot on n8n, OpenAI and the GitHub API that turns plain-language requirements into vetted open-source recommendations - cutting research time and accelerating delivery.",
    kicker: "01 · LLM · AUTOMATION · GITHUB · N8N",
    story: "GitBuddy is a Telegram bot built with n8n, OpenAI and the GitHub API that understands a developer's requirements in natural language and surfaces the best open-source solutions - reducing discovery time and helping teams ship faster.",
    cover: <AssistantCover />,
    link: GITBUDDY_URL,
  },
  {
    id: "persona",
    num: "02",
    tags: ["LLMs", "Multi-Agent Systems", "Simulation"],
    title: "Multi-Agent Synthetic Persona Simulation Lab",
    short: "A multi-agent LLM environment that simulates realistic customer personas and scenarios - a low-cost sandbox for market research, user testing and go-to-market decisions.",
    kicker: "02 · LLM · MULTI-AGENT · SIMULATION",
    story: "A multi-agent environment that uses LLMs to simulate realistic human personas, interactions and scenarios - giving teams a fast, low-cost way to pressure-test products, messaging and strategy before investing in real-world research.",
    cover: <PersonaCover />,
    link: PERSONA_URL,
  },
  {
    id: "note",
    num: "03",
    tags: ["Python", "SQL", "Signal Processing"],
    title: "Note Detective",
    short: "An audio-fingerprinting system in Python and SQL for accurate song recognition at scale - engineered for fast, reliable retrieval across large catalogs.",
    kicker: "03 · PYTHON · SQL · SIGNAL PROCESSING",
    story: "Designed and deployed an audio-fingerprinting system with Python and SQL that enabled accurate song recognition and scalable data retrieval - turning a hard signal-processing problem into a dependable, queryable service.",
    cover: cover("https://images.unsplash.com/photo-1599669454699-248893623440?", "Studio headphones on a dark surface"),
  },
  {
    id: "blockchain",
    num: "04",
    tags: ["Blockchain", "Smart Contracts", "Web3"],
    title: "Blockchain Smart Contract Solution",
    short: "A decentralized smart-contract solution for secure, transparent and automated transactions - reducing intermediaries, cost and settlement risk.",
    kicker: "04 · BLOCKCHAIN · SMART CONTRACTS · WEB3",
    story: "A decentralized solution using smart contracts to enable secure, transparent and automated transactions - cutting out intermediaries and lowering the cost and risk of settlement.",
    cover: cover("https://images.unsplash.com/photo-1761297920433-445c827868d2?", "A metallic chain against a dark background"),
    link: BLOCKCHAIN_URL,
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h13" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

/* ---------- App ---------- */

export default function App() {
  const [active, setActive] = useState<Project | null>(null)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [caseImage, setCaseImage] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActive(null); setExperienceOpen(false); setCaseImage(null) }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active || experienceOpen || caseImage ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active, experienceOpen])

  const openProject = (p: Project) => {
    if (p.link) {
      window.open(p.link, "_blank", "noopener")
    } else {
      setActive(p)
    }
  }

  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#">AB<b>.</b></a>
        <nav className="links">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <span aria-hidden="true" />
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-copy">
            <div className="hello">Hi, I&rsquo;m</div>
            <h1>ARPAN<br />BOSE<span>.</span></h1>
            <div className="slogan">I build things at the intersection<br />of data, AI and real-world impact.</div>
            <div className="desc">
              From machine learning models to multi-agent systems, I turn complex,
              data-heavy problems into simple products that drive real business outcomes.
            </div>
          </div>
          <div className="hero-art">
            <img src={heroImg} alt="Arpan Bose standing in front of an Ashok Leyland heritage wall" />
            <div className="hand one">Building a<br />more interesting<br />tomorrow. ↗</div>
            <div className="hand two">Curious mind.<br />Analytical thinking.<br />Real-world impact.<br />Always building.</div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="work-head">
            <div className="eyebrow">THINGS I&rsquo;VE BUILT</div>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="card" key={p.id} onClick={() => openProject(p)}>
                <div className="card-art">
                  {p.cover}
                  <span className="num">{p.num}</span>
                </div>
                <div className="card-info">
                  <div className="card-info-head">
                    <h2>{p.title}</h2>
                    <span className="go" aria-label="Open project"><ArrowIcon /></span>
                  </div>
                  <p>{p.short}</p>
                  <div className="chips card-chips">
                    {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="experience-intro">
            <div>
              <div className="eyebrow">BEYOND PROJECTS</div>
              <h2>REAL-WORLD<br /><span>EXPERIENCE.</span></h2>
            </div>
            <p>Taking the problem solving mindset into real operations while balancing technical feasibility, operational constraints and measurable business value.</p>
          </div>

          <article className="experience-feature">
            <div className="experience-photo">
              <img src={ashokFactory} alt="Ashok Leyland truck assembly line" loading="lazy" />
              <div className="photo-overlay"></div>
              <div className="photo-caption">From operator attention<br />to engineered checkpoints.</div>
            </div>

            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <div className="experience-company">ASHOK LEYLAND</div>
                  <div className="experience-role">SUMMER INTERN</div>
                </div>
                <div className="experience-date">2 MONTHS</div>
              </div>
              <p className="experience-summary">Built machine-vision, machine-learning and digital workflow solutions for defect prevention across three assembly-line stations.</p>

              <div className="impact-grid">
                <div>
                  <div className="impact-values"><span className="before"><small>BEFORE</small><strong>~7 min</strong></span><b>→</b><span className="after"><small>AFTER</small><strong>10–30 sec</strong></span></div>
                  <small className="impact-label">TYRE CHECK TIME</small>
                </div>
                <div>
                  <div className="impact-values"><span className="before"><small>BEFORE</small><strong>35–45%</strong></span><b>→</b><span className="after"><small>AFTER</small><strong>12–15%</strong></span></div>
                  <small className="impact-label">SUPERVISOR ESCALATION</small>
                </div>
                <div>
                  <div className="impact-values"><span className="before"><small>BEFORE</small><strong>~11 min</strong></span><b>→</b><span className="after"><small>AFTER</small><strong>&lt;30 sec</strong></span></div>
                  <small className="impact-label">WIRING RETRIEVAL TIME</small>
                </div>
              </div>

              <button className="experience-link" onClick={() => setExperienceOpen(true)}>VIEW CASE STUDY <ArrowIcon /></button>
            </div>
          </article>

          <article className="experience-secondary">
            <div className="secondary-photo">
              <img src={citiusGroup} alt="CitiusTech team" loading="lazy" />
            </div>
            <div className="secondary-main">
              <div className="secondary-heading">
                <div>
                  <div className="secondary-company">CITIUSTECH</div>
                  <div className="secondary-role">TRAINEE SOFTWARE ENGINEER</div>
                </div>
                <div className="secondary-date">17 MONTHS</div>
              </div>
              <p>Enterprise applications, process automation and data-quality analytics - turning fragmented workflows into simpler, more reliable systems.</p>
              <div className="citius-impact">
                <div><strong>100%</strong><span>manual entry eliminated</span></div>
                <div><strong>3</strong><span>core workflow areas</span></div>
                <div><strong>KPI</strong><span>data-quality monitoring</span></div>
              </div>
            </div>
          </article>

          <div className="experience-footer" id="contact">
            <div className="exp-note">From technical detail<br />to business value.</div>
            <div className="connect">
              LET&rsquo;S CONNECT
              <div className="socials">
                <a href="https://www.linkedin.com/in/arpanbose11/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M5.2 8.1H2.1V21h3.1V8.1ZM3.65 3A1.82 1.82 0 1 0 3.65 6.64 1.82 1.82 0 0 0 3.65 3ZM8.55 8.1h3v1.76h.04c.42-.8 1.45-2.06 3.64-2.06 3.89 0 4.61 2.56 4.61 5.89V21h-3.1v-6.47c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.41V21h-3.1V8.1Z" /></svg>LinkedIn
                </a>
                <a href="https://github.com/ArpanBose11" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.98.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>GitHub
                </a>
                <a href="mailto:arpanbose.2k@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {experienceOpen && (
        <div className="experience-modal" onClick={(e) => { if (e.target === e.currentTarget) setExperienceOpen(false) }}>
          <div className="experience-modal-box">
            <div className="experience-modal-head">
              <div>
                <div className="modal-kicker">SUMMER INTERNSHIP</div>
                <div className="modal-title">Poka-Yoke Identification &amp; Digital Solutions</div>
                <p>Turning manual assembly checks into engineered, mistake-proof checkpoints.</p>
                <p className="modal-subtitle">Machine vision, ML and digital workflows across three assembly-line stations.</p>
              </div>
              <button className="close" onClick={() => setExperienceOpen(false)} aria-label="Close">×</button>
            </div>

            <div className="case-intro">
              <div>
                <span className="case-label">THE PROBLEM</span>
                <strong>Quality relied on attention, not the system.</strong>
                <p>Three assembly-line checks were discretionary, fatigue-prone and variant-sensitive. The goal was to create checkpoints that could not be skipped and left a digital trace.</p>
              </div>
              <div className="case-impact-block">
                <span className="case-label">IMPACT</span>
                <strong><span className="impact-number">128</span> productive minutes / shift</strong>
                <p>Estimated time recovered across all three solutions, alongside faster checks and fewer supervisor escalations.</p>
              </div>
            </div>

            <div className="case-solutions">
              <span className="case-label">MY SOLUTIONS</span>
              <p>Three engineered checkpoints, each designed around a specific assembly-line failure mode.</p>
            </div>

            <div className="case-chapters">
              <article>
                <div className="chapter-head"><div><b>AL-TICS</b><small>ML TYRE IDENTIFICATION · LIVE PILOT</small></div></div>
                <p>Scan the vehicle, capture two guided tyre photos, read make with an on-device CNN and size with OCR, then validate against the approved build.</p>
                <div className="chapter-stats"><b>~7 min → 10–30 sec</b><span>267 tyres · 100% pass rate</span></div>
                <button className="case-image-button" onClick={() => setCaseImage(alTicsResults)} aria-label="Enlarge AL-TICS results"><img src={alTicsResults} alt="AL-TICS project findings from internship presentation" /></button>
              </article>
              <article>
                <div className="chapter-head"><div><b>DIGITAL ESK</b><small>WIRING DIAGRAM RETRIEVAL · LIVE PILOT</small></div></div>
                <p>A version-controlled digital lookup replaced physical ESK folders, filtering the correct wiring variant and showing the approved version at the station.</p>
                <div className="chapter-stats"><b>~11 min → under 30 sec</b><span>Wrong-variant picks nearly eliminated</span></div>
                <button className="case-image-button" onClick={() => setCaseImage(digitalEsk)} aria-label="Enlarge Digital ESK workflow"><img src={digitalEsk} alt="Digital ESK workflow from internship presentation" /></button>
              </article>
              <article>
                <div className="chapter-head"><div><b>VISION CHECK</b><small>CAB-LATCH VERIFICATION · DEPLOY-READY</small></div></div>
                <p>A camera plus detection model was designed to confirm clip presence on every cycle, removing visual-only verification from the operator workflow.</p>
                <div className="chapter-stats"><b>88% → 93% true positive</b><span>False negative 12% → 7%</span></div>
                <button className="case-image-button" onClick={() => setCaseImage(visionCheck)} aria-label="Enlarge Vision Check results"><img src={visionCheck} alt="Vision Check pilot trial results from internship presentation" /></button>
              </article>
            </div>
          </div>
        </div>
      )}

      {caseImage && (
        <div className="image-lightbox" onClick={(e) => { if (e.target === e.currentTarget) setCaseImage(null) }}>
          <button className="lightbox-close" onClick={() => setCaseImage(null)} aria-label="Close image">×</button>
          <img src={caseImage} alt="Expanded internship presentation visual" />
        </div>
      )}

      {active && (
        <div className="modal" onClick={(e) => { if (e.target === e.currentTarget) setActive(null) }}>
          <div className="modal-box">
            <div className="modal-top">
              <div>
                <div className="modal-kicker">{active.kicker}</div>
                <div className="modal-title">{active.title}</div>
              </div>
              <button className="close" onClick={() => setActive(null)} aria-label="Close">×</button>
            </div>
            <div className="modal-art">{active.cover}</div>
            <div className="modal-body">
              <div>
                <h3>TOOLS / THEMES</h3>
                <div className="chips">
                  {active.tags.map((c) => <span className="chip" key={c}>{c}</span>)}
                </div>
              </div>
              <div>
                <h3>THE STORY</h3>
                <p>{active.story}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
