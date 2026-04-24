import { GitBranch, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer-wrap" style={{
      position: 'relative', zIndex: 2,
      padding: '40px',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '20px',
    }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>
        © 2026 Kritika Singh — Designed & built with ❤️
      </span>

      <div style={{ display: 'flex', gap: '16px' }}>
        {[
          { icon: <GitBranch size={16} />, href: 'https://github.com/Kritika-git/' },
          {icon: <ExternalLink size={16} />, href: 'https://www.linkedin.com/in/kritika-singh-960a00215/' },
          { icon: <Mail size={16} />, href: 'mailto:kritika.singh1824@gmail.com' },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              transition: 'color 0.3s, transform 0.2s',
              display: 'flex',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-muted)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
