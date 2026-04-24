import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Stack', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 40px',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,12,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}
    >
      <motion.span
        whileHover={{ color: 'var(--accent)' }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '-0.02em',
          transition: 'color 0.3s',
          cursor: 'none',
        }}
      >
        KS<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.span>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="nav-links">
        {links.map((link, i) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
          >
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.08em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
