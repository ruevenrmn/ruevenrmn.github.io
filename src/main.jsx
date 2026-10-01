import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Icon } from '@iconify/react'
import angularIcon from '@iconify-icons/simple-icons/angular'
import firebaseIcon from '@iconify-icons/simple-icons/firebase'
import flaskIcon from '@iconify-icons/simple-icons/flask'
import javascriptIcon from '@iconify-icons/simple-icons/javascript'
import metaAiIcon from '@iconify-icons/simple-icons/metaai'
import microsoftIcon from '@iconify-icons/simple-icons/microsoft'
import mysqlIcon from '@iconify-icons/simple-icons/mysql'
import openapiIcon from '@iconify-icons/simple-icons/openapiinitiative'
import phpIcon from '@iconify-icons/simple-icons/php'
import pythonIcon from '@iconify-icons/simple-icons/python'
import rasaIcon from '@iconify-icons/simple-icons/rasa'
import reactIcon from '@iconify-icons/simple-icons/react'
import supabaseIcon from '@iconify-icons/simple-icons/supabase'
import typescriptIcon from '@iconify-icons/simple-icons/typescript'
import virustotalIcon from '@iconify-icons/simple-icons/virustotal'
import web3Icon from '@iconify-icons/simple-icons/web3dotjs'
import {
  Brain,
  Database,
  EnvelopeSimple,
  FileArrowDown,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  ArrowDown,
  ArrowUpRight,
  X,
  ShieldCheck,
  StackSimple,
} from '@phosphor-icons/react'
import '@fontsource-variable/inter'
import './styles.css'

const experience = [
  {
    company: 'Brightideas Information Technology Corporation',
    role: 'Full-Stack Developer Intern · Reporting & Data Validation',
    description: 'Built React and TypeScript reporting interfaces with filters, summaries, and XLSX exports; validated API, database, and legacy-system results with Power Query and SQLyog.',
    period: 'Apr–Jul 2026',
    startDate: '2026-04',
  },
  {
    company: 'Simplevia Technologies Inc.',
    role: 'Backend Developer Intern · Service Management Systems',
    description: 'Built three Flask REST systems and consolidated requestor, technician, and service-desk records in MySQL; tested end-to-end consistency across workflows.',
    period: 'Jan–Mar 2026',
    startDate: '2026-01',
  },
]

const additionalExperience = [
  {
    company: 'InnOlympics 2026 Hackathon · KA’AYUDA',
    role: 'Prototype Developer',
    description: 'Built and presented a prototype during a two-day GDG on Campus PLM hackathon, contributing to problem framing and pitch preparation.',
    period: 'Apr 2026',
    startDate: '2026-04',
  },
]

const projects = [
  {
    title: 'Folio',
    eyebrow: 'Wallet intelligence workspace',
    href: 'https://folio-space.vercel.app/',
    preview: {
      video: '/folio-walkthrough.mp4',
      mobileVideo: '/folio-walkthrough-mobile.mp4',
      poster: '/folio-landing-page.png',
    },
    description: 'A read-only workspace for exploring public wallet activity, assets, and exposure across supported EVM networks.',
    highlights: [
      'Public showcase and authenticated workspace',
      'Token, NFT, activity, DeFi, and historical views',
      'Coverage-aware loading and incomplete-data states',
    ],
    stack: ['React', 'Vite', 'Recharts', 'Worker APIs'],
  },
]

const secondaryProjects = [
  {
    title: 'Wallet Tracker',
    eyebrow: 'Blockchain monitoring & Discord alerts',
    period: '2024',
    description: 'A multi-network wallet monitor for balances, token values, NFT holdings, transaction activity, and Discord webhook notifications.',
    stack: ['JavaScript', 'web3.js', 'Firebase'],
  },
  {
    title: 'KalasagAI',
    eyebrow: 'Cybersecurity chatbot',
    period: 'Feb 2025',
    description: 'A phishing-analysis chatbot for messages and URLs with a cached domain-reputation database powered by Rasa, LLaMA 3.3, VirusTotal, PHP, and Supabase.',
    stack: ['Python', 'Rasa', 'LLaMA 3.3', 'VirusTotal'],
  },
]

const skillGroups = [
  {
    label: 'Languages & interface',
    items: [
      { label: 'Python', icon: pythonIcon, color: '#3776AB' },
      { label: 'PHP', icon: phpIcon, color: '#777BB4' },
      { label: 'JavaScript', icon: javascriptIcon, color: '#F7DF1E' },
      { label: 'TypeScript', icon: typescriptIcon, color: '#3178C6' },
      { label: 'HTML', fallback: StackSimple, color: '#E34F26' },
      { label: 'CSS', fallback: StackSimple, color: '#1572B6' },
      { label: 'React', icon: reactIcon, color: '#61DAFB' },
      { label: 'Angular', icon: angularIcon, color: '#DD0031' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { label: 'Flask', icon: flaskIcon, color: '#111111' },
      { label: 'REST APIs', icon: openapiIcon, color: '#6BA539' },
      { label: 'JSON', fallback: StackSimple, color: '#5B6B7A' },
      { label: 'SQL', fallback: Database, color: '#5B6B7A' },
      { label: 'MySQL', icon: mysqlIcon, color: '#4479A1' },
      { label: 'SQLyog', fallback: Database, color: '#5B6B7A' },
      { label: 'Firebase', icon: firebaseIcon, color: '#FFCA28' },
      { label: 'Firestore', icon: firebaseIcon, color: '#FFCA28' },
      { label: 'Supabase', icon: supabaseIcon, color: '#3FCF8E' },
      { label: 'Power Query', icon: microsoftIcon, color: '#5E5E5E' },
    ],
  },
  {
    label: 'Data & QA',
    items: [
      { label: 'Data validation', fallback: ShieldCheck, color: '#D65C5C' },
      { label: 'Database reconciliation', fallback: Database, color: '#5B6B7A' },
      { label: 'Reporting', fallback: StackSimple, color: '#5B6B7A' },
      { label: 'Scenario testing', fallback: ShieldCheck, color: '#D65C5C' },
      { label: 'API/database validation', fallback: ShieldCheck, color: '#D65C5C' },
      { label: 'UI issue investigation', fallback: StackSimple, color: '#5B6B7A' },
      { label: 'Structured debugging', fallback: StackSimple, color: '#5B6B7A' },
    ],
  },
  {
    label: 'AI & security',
    items: [
      { label: 'NLP', fallback: Brain, color: '#8B5CF6' },
      { label: 'Rasa', icon: rasaIcon, color: '#5A17EE' },
      { label: 'LLaMA 3.3', icon: metaAiIcon, color: '#0668E1' },
      { label: 'VirusTotal API', icon: virustotalIcon, color: '#394EFF' },
      { label: 'Phishing detection', fallback: ShieldCheck, color: '#D65C5C' },
    ],
  },
  {
    label: 'Blockchain & delivery',
    items: [
      { label: 'web3.js', icon: web3Icon, color: '#F16822' },
      { label: 'Blockchain APIs', fallback: StackSimple, color: '#5B6B7A' },
      { label: 'Discord webhooks', fallback: PaperPlaneTilt, color: '#5865F2' },
      { label: 'Git', fallback: StackSimple, color: '#F05032' },
      { label: 'GitHub', fallback: GithubLogo, color: '#24292F' },
      { label: 'Browser developer tools', fallback: StackSimple, color: '#5B6B7A' },
    ],
  },
]

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'projects', 'skills']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeSection
}

function ContactMenu({ className = '' }) {
  const menuRef = useRef(null)

  useEffect(() => {
    const closeMenu = () => {
      const menu = menuRef.current
      if (!menu?.open) return
      menu.removeAttribute('open')
    }

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return
      const menu = menuRef.current
      if (!menu?.open) return
      closeMenu()
      menu.querySelector('summary')?.focus()
    }

    const handleOutsidePointer = (event) => {
      if (!menuRef.current?.contains(event.target)) closeMenu()
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('pointerdown', handleOutsidePointer)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('pointerdown', handleOutsidePointer)
    }
  }, [])

  return (
    <details ref={menuRef} className={['contact-popover', className].filter(Boolean).join(' ')}>
      <summary className="contact-button"><PaperPlaneTilt size={16} weight="bold" aria-hidden="true" /><span className="contact-button__label">Contact</span></summary>
      <div className="contact-popover__panel">
        <div className="contact-popover__intro">
          <div>
            <h2>Let&apos;s work together</h2>
            <p>For software development opportunities and collaboration. I usually reply within a day.</p>
          </div>
          <button className="contact-popover__close" type="button" aria-label="Close contact card" onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}>
            <X size={16} weight="bold" aria-hidden="true" />
          </button>
        </div>
        <div className="contact-popover__links">
          <a href="mailto:ruevenrmn@gmail.com">
            <span className="contact-popover__icon"><EnvelopeSimple size={16} aria-hidden="true" /></span>
            <span className="contact-popover__link-copy"><strong>Email</strong><small>ruevenrmn@gmail.com</small></span>
            <ArrowUpRight className="contact-popover__link-arrow" size={15} aria-hidden="true" />
          </a>
          <a href="https://github.com/ruevenrmn" target="_blank" rel="noreferrer">
            <span className="contact-popover__icon"><GithubLogo size={16} aria-hidden="true" /></span>
            <span className="contact-popover__link-copy"><strong>GitHub</strong><small>github.com/ruevenrmn</small></span>
            <ArrowUpRight className="contact-popover__link-arrow" size={15} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/ruevenrmn" target="_blank" rel="noreferrer">
            <span className="contact-popover__icon"><LinkedinLogo size={16} aria-hidden="true" /></span>
            <span className="contact-popover__link-copy"><strong>LinkedIn</strong><small>linkedin.com/in/ruevenrmn</small></span>
            <ArrowUpRight className="contact-popover__link-arrow" size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </details>
  )
}

function TechMark({ item }) {
  const style = item.color ? { color: item.color } : undefined
  if (item.icon) return <Icon className="tool-chip__logo" icon={item.icon} style={style} aria-hidden="true" />
  const Fallback = item.fallback ?? Database
  return <Fallback className="tool-chip__logo" style={style} size={16} weight="fill" aria-hidden="true" />
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-card__link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} landing page in a new tab`}>
        <div className="project-card__preview">
          <div className="landing-preview" aria-hidden="true">
            <img className="landing-preview__image" src={project.preview.poster} alt="" />
            <video className="landing-preview__video" autoPlay muted loop playsInline preload="metadata" poster={project.preview.poster}>
              <source media="(max-width: 760px)" src={project.preview.mobileVideo} type="video/mp4" />
              <source src={project.preview.video} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="project-card__body">
          <div className="project-card__identity">
            <img className="project-card__mark" src="/folio-mark.svg" alt="" aria-hidden="true" width="48" height="48" />
            <div>
              <p className="project-card__eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
            </div>
          </div>
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__details">
            <p className="project-card__label">What you can explore</p>
            <ul className="project-card__highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>

          <div className="project-card__footer">
            <div className="project-card__stack" aria-label="Project technologies">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <span className="project-card__cta">View live product <ArrowUpRight size={15} weight="bold" aria-hidden="true" /></span>
          </div>
        </div>
      </a>
    </article>
  )
}

function ProjectBrief({ project }) {
  return (
    <article className="project-brief">
      <div className="project-brief__header">
        <div>
          <p className="project-brief__eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
        <time>{project.period}</time>
      </div>
      <p className="project-brief__description">{project.description}</p>
      <div className="project-brief__stack" aria-label={`${project.title} technologies`}>
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  )
}

function HomePage() {
  const activeSection = useActiveSection()
  const navItems = [{ id: 'about', label: 'About' }, { id: 'projects', label: 'Work' }, { id: 'skills', label: 'Experience' }]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined}>{activeSection === item.id && <StackSimple size={15} weight="bold" aria-hidden="true" />}{item.label}</a>)}
          </nav>
          <ContactMenu />
        </div>
      </header>

      <main id="main-content">
        <section id="about" className="hero section-anchor" aria-labelledby="hero-title">
          <div className="hero__intro">
            <h1 id="hero-title">Hey! I&apos;m <span className="hero__name">Rueven Roman</span>. I build full-stack products, APIs, and reliable data workflows.</h1>
            <p>I work on interfaces, backend systems, data validation, and QA from prototype to handoff.</p>
            <div className="hero__actions"><a className="button button--dark" href="#projects">View selected work <ArrowDown size={16} weight="bold" aria-hidden="true" /></a><a className="button button--soft" href="/Rueven_Roman_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab"><FileArrowDown size={16} aria-hidden="true" /> Resume</a></div>
          </div>
        </section>

        <section id="projects" className="projects-section section-anchor" aria-labelledby="projects-title">
          <h2 id="projects-title">Featured work</h2>
          <div className="project-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          <div className="secondary-projects" aria-labelledby="other-projects-title">
            <h3 id="other-projects-title">Other projects</h3>
            <div className="project-brief-list">{secondaryProjects.map((project) => <ProjectBrief key={project.title} project={project} />)}</div>
          </div>
        </section>

        <section id="skills" className="skills-section section-anchor" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.company}><div><h3>{item.role}</h3><p>{item.company}</p><p className="experience-row__detail">{item.description}</p></div><time dateTime={item.startDate}>{item.period}</time></article>)}</div>
          <div className="additional-experience">
            <p className="subsection-label">Additional experience</p>
            <div className="experience-list">{additionalExperience.map((item) => <article className="experience-row" key={item.company}><div><h3>{item.role}</h3><p>{item.company}</p><p className="experience-row__detail">{item.description}</p></div><time dateTime={item.startDate}>{item.period}</time></article>)}</div>
          </div>

          <h2 className="tools-title">Tech Stack</h2>
          <div className="tool-groups" aria-label="Tools and technologies">{skillGroups.map((group) => <div className="tool-group" key={group.label}><h3 className="tool-group__title">{group.label}</h3><div className="tool-grid">{group.items.map((item) => <span className="tool-chip" key={item.label}><TechMark item={item} /><span>{item.label}</span></span>)}</div></div>)}</div>

          <div className="credentials-block" aria-labelledby="credentials-title">
            <h2 id="credentials-title">Education & credentials</h2>
            <div className="credentials-grid">
              <article className="credential-card">
                <p className="credential-card__label">Education</p>
                <h3>FEU Institute of Technology</h3>
                <p>BS Computer Science, Specialization in Data Science</p>
                <time dateTime="2026-09">September 2026</time>
              </article>
              <article className="credential-card">
                <p className="credential-card__label">Certifications</p>
                <ul className="credential-list">
                  <li>Information Technology Specialist - Python <span>2024</span></li>
                  <li>Cisco Networking Academy - Introduction to Networks <span>2024</span></li>
                  <li>PMI Project Management Ready <span>2025</span></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="closing-cta" aria-labelledby="closing-cta-title">
          <div>
            <p className="closing-cta__eyebrow">Next step</p>
            <h2 id="closing-cta-title">Have a product or workflow that needs building?</h2>
            <p>I&apos;m open to software development opportunities and thoughtful collaboration.</p>
          </div>
          <a className="button button--dark" href="mailto:ruevenrmn@gmail.com">Start a conversation <ArrowUpRight size={16} weight="bold" aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Rueven Roman</span><div><a href="mailto:ruevenrmn@gmail.com">Email</a><a href="https://github.com/ruevenrmn" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ruevenrmn" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  )
}

function App() {
  return <HomePage />
}

createRoot(document.getElementById('root')).render(<App />)
