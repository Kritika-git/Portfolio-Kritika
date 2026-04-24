import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { MapPin, Code2, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">About me</p>
          <h2 className="section-title">
            Building the <em>web</em>,<br />one pixel at a time.
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px', fontSize: '14px' }}>
              I am a Software developer specializing in modern web applications.
Focused on clean architecture, scalability, and real-world problem solving.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px', fontSize: '14px' }}>
              I thrive at the intersection of design and engineering — turning complex requirements
              into intuitive, animated, pixel-perfect interfaces. From building dynamic procurement dashboards
              to AI-powered travel planners, I love shipping products that feel alive.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '14px' }}>
              Currently interning at <span style={{ color: 'var(--accent)' }}>MindSprint</span> in Bengaluru.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {[
              { icon: <MapPin size={16} />, label: 'Location', value: 'Kolkata → Bengaluru, India' },
              { icon: <Code2 size={16} />, label: 'Focus', value: 'React · Full Stack · UI Engineering' },
              { icon: <Zap size={16} />, label: 'Currently', value: 'Junior Engineer Intern @ MindSprint' },
            ].map(({ icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                  padding: '20px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)'
                  e.currentTarget.style.background = 'var(--bg-card-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
