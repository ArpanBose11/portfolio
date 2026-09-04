import { useEffect, useState } from "react"

/* ---------- Generative SVG covers ---------- */

function PersonaCover() {
  // Multi-agent network: interconnected persona nodes
  const nodes = [
    [78, 60], [188, 44], [300, 82], [128, 128], [232, 132],
    [56, 176], [176, 196], [286, 178], [340, 118], [120, 60],
  ]
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [3, 5], [4, 6],
    [6, 7], [2, 8], [4, 7], [3, 6], [1, 9], [7, 8],
  ]
  return (
    <svg className="cover-svg" viewBox="0 0 384 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="384" height="240" fill="#080e15" />
      <g stroke="#62aaff" strokeOpacity="0.28" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i % 3 === 0 ? 15 : 10} fill="#0d1621" stroke="#3a5a82" />
          <circle cx={x} cy={y - 3} r={i % 3 === 0 ? 5 : 3.5} fill={i % 4 === 0 ? "#a77cff" : "#62aaff"} fillOpacity="0.9" />
          <rect x={x - (i % 3 === 0 ? 7 : 5)} y={y + 2} width={i % 3 === 0 ? 14 : 10} height="4" rx="2" fill="#62aaff" fillOpacity="0.35" />
        </g>
      ))}
    </svg>
  )
}

function NoteCover() {
  // Audio fingerprint: spectrogram bars + constellation peaks
  const bars = Array.from({ length: 46 })
  const peaks = [[60, 70], [104, 52], [150, 96], [206, 60], [250, 108], [300, 74], [338, 120]]
  return (
    <svg className="cover-svg" viewBox="0 0 384 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="384" height="240" fill="#080e15" />
      <g>
        {bars.map((_, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.4)) * 150
          return (
            <rect key={i} x={8 + i * 8.2} y={(240 - h) / 2} width="4.4" height={h} rx="2"
              fill={i % 5 === 0 ? "#a77cff" : "#62aaff"} fillOpacity={0.18 + (i % 5 === 0 ? 0.4 : 0.22)} />
          )
        })}
      </g>
      <g stroke="#eef1f3" strokeOpacity="0.5" strokeWidth="1">
        {peaks.slice(0, -1).map((p, i) => (
          <line key={i} x1={p[0]} y1={p[1]} x2={peaks[i + 1][0]} y2={peaks[i + 1][1]} strokeDasharray="2 3" />
        ))}
      </g>
      {peaks.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#f3f1eb" />
      ))}
    </svg>
  )
}

function BlockchainCover() {
  // Linked-block lattice
  const blocks = [[40, 96], [130, 60], [130, 140], [220, 96], [310, 60], [310, 140]]
  const links = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]]
  return (
    <svg className="cover-svg" viewBox="0 0 384 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="384" height="240" fill="#080e15" />
      <g stroke="#62aaff" strokeOpacity="0.35" strokeWidth="1.4">
        {links.map(([a, b], i) => (
          <line key={i} x1={blocks[a][0] + 17} y1={blocks[a][1] + 17} x2={blocks[b][0] + 17} y2={blocks[b][1] + 17} />
        ))}
      </g>
      {blocks.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect width="34" height="34" rx="6" fill="#0e1a26" stroke={i % 2 ? "#a77cff" : "#3a5a82"} strokeWidth="1.4" />
          <rect x="7" y="9" width="20" height="2.6" rx="1.3" fill="#62aaff" fillOpacity="0.7" />
          <rect x="7" y="15" width="14" height="2.6" rx="1.3" fill="#62aaff" fillOpacity="0.4" />
          <rect x="7" y="21" width="17" height="2.6" rx="1.3" fill="#62aaff" fillOpacity="0.4" />
        </g>
      ))}
    </svg>
  )
}

function HeroCover() {
  // Abstract composition tying the collection together
  const dots = Array.from({ length: 34 })
  return (
    <svg className="cover-svg" viewBox="0 0 560 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="hg" cx="62%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#12324f" />
          <stop offset="100%" stopColor="#080e15" />
        </radialGradient>
      </defs>
      <rect width="560" height="480" fill="url(#hg)" />
      <g stroke="#62aaff" strokeOpacity="0.12" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 60} x2="560" y2={i * 60 - 120} />
        ))}
      </g>
      {[170, 250, 330].map((r, i) => (
        <circle key={i} cx="360" cy="200" r={r} fill="none" stroke="#62aaff" strokeOpacity={0.22 - i * 0.05} strokeWidth="1" />
      ))}
      {dots.map((_, i) => {
        const a = i * 0.62
        const r = 60 + (i % 6) * 44
        const x = 360 + Math.cos(a) * r
        const y = 200 + Math.sin(a) * r * 0.86
        return <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 4.5 : 2.4} fill={i % 4 === 0 ? "#a77cff" : "#8fc3ff"} fillOpacity="0.85" />
      })}
      <circle cx="360" cy="200" r="18" fill="#0d1621" stroke="#62aaff" strokeOpacity="0.7" />
      <circle cx="360" cy="200" r="6" fill="#62aaff" />
    </svg>
  )
}

/* ---------- Data ---------- */

type Project = {
  id: string
  num: string
  tags: string
  title: string
  short: string
  kicker: string
  chips: string[]
  story: string
  cover: React.ReactNode
}

const projects: Project[] = [
  {
    id: "persona",
    num: "01",
    tags: "LLM · MULTI-AGENT · SIMULATION",
    title: "Multi-Agent Synthetic Persona Simulation Lab",
    short: "A multi-agent environment using LLMs to simulate realistic personas, interactions and scenarios.",
    kicker: "01 · LLM · MULTI-AGENT · SIMULATION",
    chips: ["LLMs", "Multi-Agent Systems", "Simulation"],
    story: "A multi-agent environment using LLMs to simulate realistic human personas, interactions and scenarios.",
    cover: <PersonaCover />,
  },
  {
    id: "assistant",
    num: "02",
    tags: "LLM · AUTOMATION · GITHUB · N8N",
    title: "AI-Powered Developer Assistant",
    short: "A Telegram bot using n8n, OpenAI and GitHub API to understand requirements and surface open-source solutions.",
    kicker: "02 · LLM · AUTOMATION · GITHUB · N8N",
    chips: ["LLMs", "Automation", "GitHub", "n8n"],
    story: "A Telegram bot using n8n, OpenAI and GitHub API to understand developer requirements and surface the best open-source solutions.",
    cover: (
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=768&h=480&fit=crop&auto=format"
        alt="Source code displayed on a dark screen"
        loading="lazy"
      />
    ),
  },
  {
    id: "note",
    num: "03",
    tags: "PYTHON · SQL · SIGNAL PROCESSING",
    title: "Note Detective",
    short: "Audio fingerprinting in Python and SQL for accurate song recognition and scalable data retrieval.",
    kicker: "03 · PYTHON · SQL · SIGNAL PROCESSING",
    chips: ["Python", "SQL", "Signal Processing"],
    story: "Designed and deployed an audio fingerprinting system with Python and SQL that enabled accurate song recognition and scalable data retrieval.",
    cover: <NoteCover />,
  },
  {
    id: "blockchain",
    num: "04",
    tags: "BLOCKCHAIN · SMART CONTRACTS · WEB3",
    title: "Blockchain Smart Contract Solution",
    short: "A decentralized solution using smart contracts to enable secure, transparent and automated transactions.",
    kicker: "04 · BLOCKCHAIN · SMART CONTRACTS · WEB3",
    chips: ["Blockchain", "Smart Contracts", "Web3"],
    story: "A decentralized solution using smart contracts to enable secure, transparent and automated transactions.",
    cover: <BlockchainCover />,
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

  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#">AB<b>.</b></a>
        <nav className="links">
          <a href="#work">Work</a>
          <a href="#experience">About</a>
          <a href="#experience">Experience</a>
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
              From machine learning models to multi-agent systems,<br />
              I enjoy turning complex problems into simple, useful solutions.
            </div>
            <div className="cta-row">
              <a className="cta" href="#work">Explore my work&nbsp; →</a>
              <span className="note">Curious mind.<br />Always building.</span>
            </div>
          </div>
          <div className="hero-art">
            <HeroCover />
            <div className="hand one">Building a<br />more interesting<br />tomorrow. ↗</div>
            <div className="hand two">Curious mind.<br />Analytical thinking.<br />Real-world impact.<br />Always building.</div>
            <div className="rail"><b>01</b><span>02</span><span>03</span><span>04</span><span>05</span></div>
            <div className="location"><i></i>BASED IN INDIA</div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="work-head">
            <div className="eyebrow">SELECTED WORK</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>A mix of AI, data, software and curiosity.</p>
              <div className="arrows"><span className="circle">←</span><span className="circle">→</span></div>
            </div>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="card" key={p.id} onClick={() => setActive(p)}>
                <div className="card-art">
                  {p.cover}
                  <span className="num">{p.num}</span>
                  <span className="tags">{p.tags}</span>
                </div>
                <div className="card-info">
                  <div>
                    <h2>{p.title}</h2>
                    <p>{p.short}</p>
                  </div>
                  <span className="go" aria-label="Open project"><ArrowIcon /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="exp-title">
            <div className="eyebrow">BEYOND PROJECTS</div>
            <h2>Real-world<br />experience.</h2>
          </div>
          <div className="exp-copy">
            <strong>Ashok Leyland · Summer Internship</strong><br />
            Computer vision and ML solutions to improve defect prevention, inspection efficiency and digital information retrieval.<br />
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

      <footer>
        <span className="footer-logo">AB<b>.</b></span>
        <span>© 2026 Arpan Bose. All rights reserved.</span>
        <span>Built with curiosity <span className="dot">●</span></span>
      </footer>

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
                  {active.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
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
