import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Mail, GitBranch, Send, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:kritika.singh1824@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's <em>connect</em></h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'start' }}>
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '14px', marginBottom: '40px' }}>
              I'm currently open to new opportunities and collaborations. Whether it's a role, a freelance project, or just a conversation — my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'kritika.singh1824@gmail.com', href: 'mailto:kritika.singh1824@gmail.com' },
                { icon: <GitBranch size={16} />, label: 'GitHub', value: 'github.com/kritika-singh', href: 'https://github.com/kritika-singh' },
                { icon: <ExternalLink size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/kritika-singh', href: 'https://linkedin.com/in/kritika-singh' },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            onSubmit={handleSubmit}
            style={{
              padding: '40px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {[
              { name: 'name', label: 'Your Name', placeholder: 'Firstname Lastname', type: 'text' },
              { name: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.name]}
                  onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button
              type="submit"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '14px 28px',
                background: sent ? 'var(--accent-2)' : 'var(--accent)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                borderRadius: '6px',
                transition: 'background 0.3s, transform 0.2s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,195,247,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Send size={16} />
              {sent ? 'Opening mail client...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
