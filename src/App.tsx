import { useEffect, useState } from "react"
import heroImg from "./imports/file_0000000079207207bb1e293b79bba92f.png"

const PRESENTATION_URL = `${import.meta.env.BASE_URL}GitBuddy-Presentation.html`

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
    <svg className="cover-svg" viewBox="0 0 384 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ac" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c141d" />
          <stop offset="100%" stopColor="#0a1017" />
        </linearGradient>
      </defs>
      <rect width="384" height="240" fill="url(#ac)" />
      <circle cx="300" cy="52" r="90" fill="#62aaff" opacity="0.06" />
      {/* pipeline line */}
      <line x1="108" y1="120" x2="276" y2="120" stroke="#62aaff" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="3 4" />
      <LogoChip cx={108} cy={120}>
        <path fill="#62aaff" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </LogoChip>
      <LogoChip cx={192} cy={120}>
        <path fill="#f3f1eb" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 22a6.05 6.05 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5Zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.09 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.9a4.5 4.5 0 0 1-6.14-1.65Zm-1.26-10.4a4.48 4.48 0 0 1 2.34-1.97V11.7a.79.79 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.62-6.14Zm16.6 3.86-5.84-3.4L15.1 7.2a.08.08 0 0 1 .07 0l4.83 2.78a4.5 4.5 0 0 1-.68 8.11v-5.68a.79.79 0 0 0-.4-.67Zm2.01-3.03-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.6 8.6V6.27a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66Zm-12.64 4.17-2.02-1.16a.08.08 0 0 1-.04-.06V6.4a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.08 5.8a.79.79 0 0 0-.39.68l-.01 6.73Zm1.1-2.36 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
      </LogoChip>
      <LogoChip cx={276} cy={120}>
        <path fill="#f3f1eb" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.27-5.15 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
      </LogoChip>
    </svg>
  )
}

function PersonaCover() {
  const avatars: { x: number; y: number; c: string }[] = [
    { x: 128, y: 118, c: "#62aaff" },
    { x: 176, y: 96, c: "#a77cff" },
    { x: 226, y: 116, c: "#4fd0c0" },
    { x: 158, y: 156, c: "#f0a35e" },
    { x: 214, y: 162, c: "#62aaff" },
    { x: 268, y: 104, c: "#a77cff" },
  ]
  return (
    <svg className="cover-svg" viewBox="0 0 384 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c141d" />
          <stop offset="100%" stopColor="#0a1017" />
        </linearGradient>
      </defs>
      <rect width="384" height="240" fill="url(#pc)" />
      <circle cx="80" cy="60" r="80" fill="#a77cff" opacity="0.05" />
      <g stroke="#5a6672" strokeOpacity="0.4" strokeWidth="1">
        {avatars.slice(0, -1).map((a, i) => (
          <line key={i} x1={a.x} y1={a.y} x2={avatars[i + 1].x} y2={avatars[i + 1].y} />
        ))}
      </g>
      {avatars.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r="26" fill="#0e1a26" stroke={a.c} strokeWidth="1.6" />
          <clipPath id={`clip${i}`}><circle cx={a.x} cy={a.y} r="24" /></clipPath>
          <g clipPath={`url(#clip${i})`} fill={a.c} opacity="0.92">
            <circle cx={a.x} cy={a.y - 5} r="7" />
            <circle cx={a.x} cy={a.y + 20} r="14" />
          </g>
        </g>
      ))}
    </svg>
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
    short: "A Telegram bot on n8n, OpenAI and the GitHub API that turns plain-language requirements into vetted open-source recommendations — cutting research time and accelerating delivery.",
    kicker: "01 · LLM · AUTOMATION · GITHUB · N8N",
    story: "GitBuddy is a Telegram bot built with n8n, OpenAI and the GitHub API that understands a developer's requirements in natural language and surfaces the best open-source solutions — reducing discovery time and helping teams ship faster.",
    cover: <AssistantCover />,
    link: PRESENTATION_URL,
  },
  {
    id: "persona",
    num: "02",
    tags: ["LLMs", "Multi-Agent Systems", "Simulation"],
    title: "Multi-Agent Synthetic Persona Simulation Lab",
    short: "A multi-agent LLM environment that simulates realistic customer personas and scenarios — a low-cost sandbox for market research, user testing and go-to-market decisions.",
    kicker: "02 · LLM · MULTI-AGENT · SIMULATION",
    story: "A multi-agent environment that uses LLMs to simulate realistic human personas, interactions and scenarios — giving teams a fast, low-cost way to pressure-test products, messaging and strategy before investing in real-world research.",
    cover: <PersonaCover />,
  },
  {
    id: "note",
    num: "03",
    tags: ["Python", "SQL", "Signal Processing"],
    title: "Note Detective",
    short: "An audio-fingerprinting system in Python and SQL for accurate song recognition at scale — engineered for fast, reliable retrieval across large catalogs.",
    kicker: "03 · PYTHON · SQL · SIGNAL PROCESSING",
    story: "Designed and deployed an audio-fingerprinting system with Python and SQL that enabled accurate song recognition and scalable data retrieval — turning a hard signal-processing problem into a dependable, queryable service.",
    cover: cover("https://images.unsplash.com/photo-1599669454699-248893623440?", "Studio headphones on a dark surface"),
  },
  {
    id: "blockchain",
    num: "04",
    tags: ["Blockchain", "Smart Contracts", "Web3"],
    title: "Blockchain Smart Contract Solution",
    short: "A decentralized smart-contract solution for secure, transparent and automated transactions — reducing intermediaries, cost and settlement risk.",
    kicker: "04 · BLOCKCHAIN · SMART CONTRACTS · WEB3",
    story: "A decentralized solution using smart contracts to enable secure, transparent and automated transactions — cutting out intermediaries and lowering the cost and risk of settlement.",
    cover: cover("https://images.unsplash.com/photo-1761297920433-445c827868d2?", "A metallic chain against a dark background"),
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

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
          <a href="#experience">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="talk" href="#contact">Let&rsquo;s Talk ↗</a>
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
          <div className="exp-banner">
            <img
              src="https://images.unsplash.com/photo-1551471721-d3f1783e3603?w=900&h=700&fit=crop&auto=format"
              alt="A freight truck inside a manufacturing facility"
              loading="lazy"
            />
            <span className="eyebrow">BEYOND PROJECTS</span>
          </div>
          <div className="exp-copy">
            <strong>Ashok Leyland · Summer Internship</strong><br />
            Built computer-vision and ML solutions that improved defect prevention, inspection
            efficiency and digital information retrieval — reducing manual effort and raising
            quality on the manufacturing line.<br />
            <a href="#">View experience&nbsp; →</a>
          </div>
          <div className="exp-side" id="contact">
            <div className="exp-note">Same ideas.<br />Bigger impact.</div>
            <div className="connect">
              LET&rsquo;S CONNECT
              <div className="socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M5.2 8.1H2.1V21h3.1V8.1ZM3.65 3A1.82 1.82 0 1 0 3.65 6.64 1.82 1.82 0 0 0 3.65 3ZM8.55 8.1h3v1.76h.04c.42-.8 1.45-2.06 3.64-2.06 3.89 0 4.61 2.56 4.61 5.89V21h-3.1v-6.47c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.41V21h-3.1V8.1Z" /></svg>LinkedIn
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.61 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.27-5.15 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>GitHub
                </a>
                <a href="mailto:arpan.bose@example.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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
