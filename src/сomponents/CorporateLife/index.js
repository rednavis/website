import React, { Component } from 'react'
import photo from '../../content/photo'
import './style.scss'


class CorporateLife extends Component{
  state = {
    images: photo,
  } 

  runSlider = (i) =>{
    const { images } = this.state
    if(images[i].name === 'next'){
      images[i].name = 'active'
      images[i - 1].name = 'prev'
      if(i !== images.length - 1){
        images[i + 1].name = 'next'
      }
      if(i !== 1){
        images[i - 2].name = 'prev-hide'
      }
    } 
    if(images[i].name === 'prev'){
      images[i].name = 'active'
      images[i + 1].name = 'next'
      if(i !== images.length - 2){
        images[i + 2].name = 'next-hide'
      }
      if(i !== 0){
        images[i - 1].name = 'prev'
      }
    } 
    // this.resetSlider = (i) =>{
      
    // }
    this.setState({images: images})
  }

  runDots = (i) =>{
    const { images } = this.state
    for(let j = 0; j < images.length; j++){
      j < i - 1 ? images[j].name = 'prev-hide' :
      j > i + 1 ? images[j].name = 'next-hide' :
      j === i - 1 ? images[j].name = 'prev' :
      j === i + 1 ? images[j].name = 'next' :
      images[j].name = 'active'
    }
    this.setState({images: images})
  }

  

  render(){
    const { images } = this.state
    return(
      <section className="life">
        <div className="container">
          <h2 className="sect-title">Corporate life</h2>
          <div className="life-slider">
            <div className="life-slider__container">
              {
                images.map((item, index)=>
                  <div className={`life-slider__img ${item.name}`} key={index} onClick={()=>this.runSlider(index)} >
                    <img src={`assets/careers/lifes/${item.image}`} alt={item.alt}/>
                  </div>
                )
              }
            </div>
            <ul className="life-slider-dots">
              {
                images.map((item, index)=>
                  <li className={`life-slider-dots__item ${item.name === 'active' ? 'active' : ''}`} key={index} onClick={()=>this.runDots(index)}></li>
                )
              }
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default CorporateLife