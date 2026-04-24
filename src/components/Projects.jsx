import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'
import { GitBranch, ExternalLink, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'CampusOrbit',
    tagline: 'Student accommodation discovery platform',
    description:
      'A full-stack MERN platform enabling students to discover accommodations, explore cities, and access essential services. Features a TF-IDF recommendation engine, Google Maps integration, and a secure connection request system.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'Python', 'Google Maps API'],
    github: 'https://github.com/kritika-singh',
    accent: 'var(--accent)',
    highlights: [
      'Multi-criteria search with 5+ filters',
      'TF-IDF + cosine similarity recommendation engine',
      'Secure owner contact reveal system',
      'Admin dashboard + discussion forum',
    ],
  },
  {
    id: 2,
    name: 'JourneyBot',
    tagline: 'AI-powered travel itinerary generator',
    description:
      'An AI-powered trip planning application that generates personalized travel itineraries using the Gemini API. Features Google OAuth 2.0, Firebase Firestore persistence, budget optimization, and responsive design.',
    stack: ['React.js', 'Tailwind CSS', 'Firebase Firestore', 'Gemini AI', 'OAuth 2.0'],
    github: 'https://github.com/kritika-singh',
    accent: 'var(--accent-3)',
    highlights: [
      'Gemini AI for personalized itineraries',
      'Google OAuth 2.0 authentication',
      'Firebase Firestore persistence',
      'Real-time budget optimization',
    ],
  },
]

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        border: '1px solid var(--border)',
        borderRadius: '16px',
        background: 'var(--bg-card)',
        overflow: 'hidden',
        transition: 'border-color 0.4s, box-shadow 0.4s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.accent
        e.currentTarget.style.boxShadow = `0 0 40px ${project.accent}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header bar */}
      <div style={{
        height: '4px',
        background: `linear-gradient(90deg, ${project.accent}, transparent)`,
      }} />

      <div style={{ padding: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}>{project.name}</h3>
            <p style={{ fontSize: '12px', color: project.accent, letterSpacing: '0.05em' }}>{project.tagline}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px',
              border: `1px solid ${project.accent}40`,
              borderRadius: '6px',
              color: project.accent,
              fontSize: '12px',
              flexShrink: 0,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${project.accent}12`}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <GitBranch size={14} /> GitHub
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.8, marginBottom: '24px' }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: '24px' }}>
          {project.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <ChevronRight size={12} style={{ color: project.accent, flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.stack.map(tech => (
            <span
              key={tech}
              style={{
                padding: '3px 10px',
                background: `${project.accent}10`,
                border: `1px solid ${project.accent}25`,
                borderRadius: '4px',
                fontSize: '11px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <em>built</em></h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
