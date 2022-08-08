import playingTennisDesktop from '../../../../assets/images/action-athlete-ball-desktop.jpg'
import playingTennis from '../../../../assets/images/action-athlete-ball-mobile.jpg'
import playingTennisTablet from '../../../../assets/images/action-athlete-ball-tablet.jpg'

import './DecorativeImage.scss'

export const DecorativeImage = () => {
  return (
    <picture className='decorative-image'>
      <source media="(min-width: 1280px)" srcSet={playingTennisDesktop}/>
      <source media="(min-width: 768px)" srcSet={playingTennisTablet} />
      <img src={playingTennis} alt="persona jugando tennis" />
    </picture>
  )
}
