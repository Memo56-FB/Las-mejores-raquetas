import { Hero } from './components/Hero/Hero'
import { Rackets } from './components/Rackets/Rackets'
import { Products } from './components/Tennis/Products'
import './Home.scss'

export const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Rackets />
    </>
  )
}
