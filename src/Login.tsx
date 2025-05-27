import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="register-container">
      <div style={{ position: 'absolute', top: 24, right: 32, zIndex: 10 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#27ae60', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(39,174,96,0.10)', background: '#fff', borderRadius: '12px', padding: '0.4rem 1rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#27ae60" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 6px #27ae60aa)' }}>
            <g>
              <path d="M12 3L2 12h3v7a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1v-7h3L12 3z"/>
            </g>
          </svg>
          Ir al inicio
        </Link>
      </div>
      <h2>Iniciar Sesión</h2>
      {submitted ? (
        <div className="success-message">
          <p>¡Login exitoso!</p>
          <ul>
            <li><b>Email:</b> {form.email}</li>
          </ul>
        </div>
      ) : (
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      )}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'underline', fontWeight: 500 }}>
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/acerca" style={{ color: '#888', textDecoration: 'underline', fontWeight: 400 }}>
          Acerca del proyecto
        </Link>
      </div>
    </div>
  )
}

export default Login
