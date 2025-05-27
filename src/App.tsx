import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Acerca from './Acerca'
import './App.css'

function App() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="register-container">
            <h2>Registro</h2>
            {submitted ? (
              <div className="success-message">
                <p>¡Registro exitoso!</p>
                <ul>
                  <li><b>Nombre:</b> {form.nombre}</li>
                  <li><b>Email:</b> {form.email}</li>
                </ul>
              </div>
            ) : (
              <form className="register-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                <button type="submit">Registrarse</button>
              </form>
            )}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link to="/login" style={{ color: '#646cff', textDecoration: 'underline', fontWeight: 500 }}>
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/acerca" style={{ color: '#888', textDecoration: 'underline', fontWeight: 400 }}>
                Acerca del proyecto
              </Link>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </Router>
  )
}

export default App
