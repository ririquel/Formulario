import './App.css'
import { Link } from 'react-router-dom'

function Acerca() {
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
      <h2>Acerca del Proyecto</h2>
      <p>
        Este proyecto es una aplicación React creada con Vite. Incluye un formulario de registro y un formulario de inicio de sesión, utilizando React Router para la navegación entre páginas.
      </p>
      <ul>
        <li>Framework: <b>React</b> + <b>Vite</b></li>
        <li>Estilos personalizados en <code>App.css</code></li>
        <li>Navegación con <b>react-router-dom</b></li>
        <li>Componentes funcionales y hooks (<code>useState</code>)</li>
      </ul>
      <p>
        Puedes encontrar el código en la carpeta <code>src/</code> y modificarlo según tus necesidades.
      </p>
    </div>
  )
}

export default Acerca
