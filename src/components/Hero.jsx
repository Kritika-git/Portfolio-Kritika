import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, ExternalLink, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        padding: '120px 20px 80px',
        maxWidth: '1100px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(79,195,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '28px',
        }}
      >
        <span style={{ width: '24px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
        Frontend Developer · Full Stack Engineer
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(52px, 9vw, 100px)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '32px',
        }}
      >
        Kritika
        <br />
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--accent)',
          fontSize: '0.9em',
        }}>Singh</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          maxWidth: '520px',
          marginBottom: '52px',
        }}
      >
        I craft delightful frontend experiences and full-stack platforms.
        With a passion for clean architecture and pixel-perfect design, I build products that solve real-world problems and feel alive.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
      >
        <a
          href="#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px',
            background: 'var(--accent)',
            color: 'var(--bg)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.05em',
            borderRadius: '4px',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px var(--accent-glow-strong)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Get in Touch
        </a>

        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { icon: <GitBranch size={18} />, href: 'https://github.com/Kritika-git/', label: 'GitHub' },
            { icon: <ExternalLink size={18} />, href: 'https://www.linkedin.com/in/kritika-singh-960a00215/', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:kritika.singh1824@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, color: 'var(--accent)' }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                color: 'var(--text-secondary)',
                transition: 'border-color 0.3s, color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'var(--accent-glow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
        style={{
          position: 'absolute', bottom: '40px', left: '10px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.div>
        <span style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
