import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic <em>journey</em></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '48px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.3s',
            maxWidth: '720px',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          {/* BG decoration */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '200px', height: '200px',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{
              width: '52px', height: '52px',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-hover)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0,
            }}>
              <GraduationCap size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                B.Tech in Computer Science Engineering
              </h3>
              <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '14px', marginBottom: '4px' }}>
                Heritage Institute of Technology, Kolkata
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.05em', marginBottom: '28px' }}>
                2022 – 2026
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '16px 24px',
                  background: 'rgba(79,195,247,0.06)',
                  border: '1px solid rgba(79,195,247,0.15)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>CGPA</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>8.76</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>/ 10.0</div>
                </div>
                <div style={{
                  padding: '16px 24px',
                  background: 'rgba(129,199,132,0.06)',
                  border: '1px solid rgba(129,199,132,0.15)',
                  borderRadius: '8px',
                }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Graduation</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, color: 'var(--accent-2)', lineHeight: 1 }}>2026</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Expected</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
