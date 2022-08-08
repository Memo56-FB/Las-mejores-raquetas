import './Rackets.scss'
import { BsPlayCircle, BsCircleFill } from 'react-icons/bs'

import ball from '../../../../assets/images/ball-color-court.jpg'
import racket from '../../../../assets/images/raqueta.jpg'

export const Rackets = () => {
  return (
    <section>
      <div className="gallery">
        <article className='gallery__item'>
          <picture className='gallery__item__img'>
            <img src={ball} alt="Pelota de tennis" />
          </picture>
          <header className='gallery__item__header'>
            <h2>
              Nuestras
              <span>Raquetas</span>
            </h2>
          </header>
          <p className='gallery__item__content'>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
        </article>
        <div className='gallery__circles'>
          <BsCircleFill />
          <BsCircleFill />
          <BsCircleFill />
          <BsCircleFill />
        </div>
        <div className='gallery__controls'>
          <button className='gallery__controls__back'>
            <BsPlayCircle />
          </button>
          <button className='gallery__controls__next'>
            <BsPlayCircle />
          </button>
        </div>
      </div>
      <div className='rackets'>
        <article className='rackets__item'>
          <span className='rackets__item__number'>1</span>
          <picture className='rackets__item__img'>
            <img src={racket} alt="raqueta de tennis" />
          </picture>
        </article>
        <article className='rackets__item'>
          <span className='rackets__item__number'>2</span>
          <picture className='rackets__item__img'>
            <img src={racket} alt="raqueta de tennis" />
          </picture>
        </article>
        <article className='rackets__item'>
          <span className='rackets__item__number'>3</span>
          <picture className='rackets__item__img'>
            <img src={racket} alt="raqueta de tennis" />
          </picture>
        </article>
      </div>
    </section>
  )
}
