import './Footer.scss'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedin.svg'
import logo from '../../assets/icons/logo.svg'
import twitter from '../../assets/icons/twitter.svg'
import vine from '../../assets/icons/vine.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <ul className="footer__nav">
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
      <ul className='footer__social-media'>
        <li>
          <a href='#'>
            <figure>
              <img src={linkedIn} alt="linkedIn" />
            </figure>
          </a>
        </li>
        <li>
          <a href='#'>
            <figure>
              <img src={vine} alt="vine" />
            </figure>
          </a>
        </li>
        <li>
          <a href='#'>
            <figure>
              <img src={instagram} alt="instagram" />
            </figure>
          </a>
        </li>
        <li>
          <a href='#'>
            <figure>
              <img src={twitter} alt="twitter" />
            </figure>
          </a>
        </li>
        <li>
          <a href='#'>
            <figure>
              <img src={facebook} alt="facebook" />
            </figure>
          </a>
        </li>
      </ul>
      <img src={logo} className='footer__logo' alt="" />
    </footer>
  )
}
