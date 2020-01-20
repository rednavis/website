import React, { Component } from "react"
import listTestimonials from './listTestimonials'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import  "./style.scss"

class Testimonials extends Component{
  state = {
    listTestimonials: listTestimonials,
  }
  
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
    const { listTestimonials } = this.state
    return(
      <section className="testimonial">
        <div className="container">
          <h2 className="sect-title">Testimonials</h2>
          <Slider className="testimonial__slider" {...settings}>
            {
              listTestimonials.map((item, index) => (
                <div className="testimonial__col" key={index}>
                  <div className="testimonial__item">
                      <div className="testimonial__photo"><img src={`assets/About/${item.photo}`} alt=""/></div>
                      <p className="testimonial__name">{item.name}</p>
                      <p className="testimonial__position">{item.position}</p>
                      <p className="testimonial__text">{item.text ? item.text : ''}
                        <p>{item.item1 ? item.item1 : ''}</p>
                        <p>{item.item2 ? item.item2 : ''}</p>
                        <p>{item.item3 ? item.item3 : ''}</p>
                        <p className="date">{item.date ? item.date : ''}</p>
                      </p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
    )
  }
}  

export default  Testimonials