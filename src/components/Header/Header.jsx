import './Header.scss'

import { useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../../assets/icons/logo.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header>
      <button onClick={handleOpen} className='header__menu-icon'>
        <GiHamburgerMenu />
      </button>
      <nav className={`header__navigation ${isOpen ? 'open-menu' : ''}`}>
        <button onClick={handleClose} className='header__navigation__close-menu'>
          <AiOutlineClose />
        </button>
        <img src={logo} alt="logo pelota de tennis" className='header__navigation__logo' />
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
