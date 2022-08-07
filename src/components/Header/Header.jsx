import './Header.scss'

export const Header = () => {
  return (
    <header>
      <nav className='header__navigation'>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#">Historia</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className='header__language-picker'>
          <button type='button'>es</button>
          <button type='button'>en</button>
        </div>
      </nav>
    </header>
  )
}
