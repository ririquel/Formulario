import { useState } from 'react'
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
        <a href="/" style={{ color: '#646cff', textDecoration: 'underline', fontWeight: 500 }}>
          ¿No tienes cuenta? Regístrate
        </a>
      </div>
    </div>
  )
}

export default Login
