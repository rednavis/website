import React, { Component } from 'react'
import content from './content'
import './style.scss'

class WeOffer extends Component{
  render(){
    return(
      <section className="offer">
        <div className="container">
          <h2 className="sect-title">We offer</h2>
          <div className="offer__row">
            {
              content.map((item, index)=>
                <div className="offer__col" key={index}>
                  <div className="offer__img">
                    <img src={`assets/careers/offer/${item.image}`} alt=""/>
                  </div>
                  <div className="offer__text">
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}

export default WeOffer