import './App.css'

function Acerca() {
  return (
    <div className="register-container">
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
