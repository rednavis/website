import React, { Component } from "react"
import clients from './clients'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import  "./style.scss"

class Clients extends Component{
  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,  
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            speed: 500,
            autoplaySpeed: 4000,
          }
        }
      ]
    }
    return(
      <section className="clients">
        <div className="container">
          <h2 className="sect-title">Clients</h2>
          <Slider className="clients__slider" {...settings}>
            {
              clients.map((item, index)=>
                <div className="clients__item" key={index}>
                  <div><img src={`assets/clients/${item.image}`} alt={item.alt}/></div>
                </div>
              )
            }
          </Slider>
        </div>
      </section>
    )
  }
}

export default Clients