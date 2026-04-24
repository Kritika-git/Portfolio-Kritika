import { motion } from 'framer-motion'
import { useInView } from './useInView'

const categories = [
  {
    label: 'Languages',
    color: 'var(--accent)',
    items: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Frontend',
    color: 'var(--accent-3)',
    items: ['React.js', 'Tailwind CSS', 'SCSS', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    color: 'var(--accent-2)',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    label: 'Databases',
    color: '#ffb74d',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    label: 'Tools',
    color: '#f06292',
    items: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
  {
    label: 'Concepts',
    color: '#80cbc4',
    items: ['DSA', 'OOP', 'DBMS', 'System Design', 'Agile', 'SDLC'],
  },
]

export default function TechStack() {
  const [ref, inView] = useInView()

  return (
    <section id="stack" className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,17,23,0.5), transparent)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Tools of the <em>trade</em></h2>
        </motion.div>

        <div className="techstack-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '28px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cat.color
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px ${cat.color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Accent corner */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '3px', height: '40px',
                background: cat.color,
                borderRadius: '0 0 2px 0',
              }} />

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: cat.color,
                marginBottom: '16px',
              }}>
                {cat.label}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '4px 12px',
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}30`,
                      borderRadius: '100px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = cat.color
                      e.currentTarget.style.background = `${cat.color}22`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-secondary)'
                      e.currentTarget.style.background = `${cat.color}12`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
