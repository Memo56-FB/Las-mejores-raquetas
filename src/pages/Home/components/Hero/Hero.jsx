import './Hero.scss'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import logo from '../../../../assets/icons/logo.svg'

export const Hero = () => {
  return (
    <section className='home__hero'>
      <div className='home__hero__line'></div>
      <img src={logo} alt="logo de pelota de tennis" className='home__hero__logo' />
      <h1 className='home__hero__title'>Las mejores raquetas para jugar <span>Tennis</span></h1>
      <button className='home__hero__button'>
        Acerca de nosotros
        <HiOutlineArrowNarrowRight/>
      </button>
    </section>
  )
}
