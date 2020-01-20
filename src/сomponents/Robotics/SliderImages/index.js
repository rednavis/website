import React from 'react'
import images from './images'

const SliderImages = () =>{
  return(
    <div className="slider-img">
      <div className="slider-img__row">
        {
          images.map((item, index)=>
            <div className="slider-img__col" key={index}>
              <div className="slider-img__item">
                <img src={`assets/partners/${item.image}`} alt=""/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SliderImages