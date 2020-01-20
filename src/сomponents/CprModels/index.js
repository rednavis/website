import React, { Component } from 'react'
import content from './content'
import './style.scss'

class CrpModels extends Component{
  render(){
    return(
      <section className="models">
        <div className="container">
          <h2 className="sect-title">Cooperation models</h2>
          <p className="sect-descr">We pay close attention to determining the most appropriate cooperation model for each particular project. Careful analysis and individual approach allow creating a perfect balance and productive working environment</p>
          <div className="models__row">
            {
              content.map((item, index)=>
                <div className="models__col" key={index}>
                  <div className="models__item">
                    <img className="models__icon" src={`assets/process/models/${item.icon}`} alt=""/>
                    <h3 className="models__title">{item.title}</h3>
                    <p className="models__descr">{item.descr}</p>
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

export default CrpModels