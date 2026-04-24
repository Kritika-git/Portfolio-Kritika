import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Briefcase, ChevronRight } from 'lucide-react'

const experience = [
  {
    role: 'Junior Engineer Intern',
    company: 'MindSprint',
    location: 'Bengaluru, India',
    period: 'Jan 2026 – Present',
    type: 'Internship',
    color: 'var(--accent)',
    bullets: [
      'Developed and shipped frontend features for ProcureSprint — an enterprise procurement platform — including vendor onboarding dashboard, supplier forms, template management, and chatbot UI using React and SCSS',
      'Built a dynamic RFx automation form that processes uploaded Excel files, extracting headers and tabular data to render an interactive, paginated form with add/delete row functionality and email attachment support',
      'Integrated Veridion API (Spring Boot backend) for supplier matching and enrichment; redesigned supplier scouting UI from modal to drawer architecture while refactoring inline styles to SCSS',
      'Developed chatbot interface with loader animations and dynamic text transitions; resolved CORS and API integration issues in collaboration with backend team and contributed to production deployment',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've <em>worked</em></h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '0', top: '28px', bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingLeft: '48px', marginBottom: '48px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-6px', top: '28px',
                width: '13px', height: '13px',
                background: exp.color,
                borderRadius: '50%',
                boxShadow: `0 0 16px ${exp.color}`,
              }} />

              <div style={{
                padding: '36px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = exp.color
                  e.currentTarget.style.boxShadow = `0 0 30px ${exp.color}14`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}>{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: exp.color, fontWeight: 600, fontSize: '14px' }}>{exp.company}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>·</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{exp.location}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <span style={{
                      padding: '4px 12px',
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}35`,
                      borderRadius: '100px',
                      fontSize: '11px',
                      color: exp.color,
                    }}>{exp.type}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{exp.period}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
