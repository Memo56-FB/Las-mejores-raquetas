import './Products.scss'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
export const Products = () => {
  return (
    <section className='products'>
      <h3 className='products__subtitle'>tennis</h3>
      <div className='products__title'>
        <h2>
          Raquetas.Accesorios.
          <span>Pelotas.</span>
        </h2>
        <div>
          <p>Conoce nuestras raquetas y aprende a jugar</p>
          <p>Tennis cómo un profesional</p>
        </div>
      </div>
      <button type='button' className='products__button'>
        Historia
        <HiOutlineArrowNarrowRight/>
      </button>
    </section>
  )
}
