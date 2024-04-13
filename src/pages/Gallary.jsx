import React from 'react'
import CarouselGallary from '../components/Gallery/CarouselGallary';
import ClipGallery from '../components/Gallery/ClipGallery';
import Album from '../section/Album'
import Backtotop from '../section/Backtotop'

const Gallary = () => {
  return (
    <div>
     <div>
      <CarouselGallary />
     </div>
     <div>
      <Album />
     </div>
     <div>
      <ClipGallery />
     </div>
     <div>
      <Backtotop />

     </div>

    </div>
  )
}

export default Gallary
