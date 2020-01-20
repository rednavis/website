import React, { Component } from 'react'
import listCoding from './listCoding'
import './style.scss'

class Technologies extends Component{
  render(){
    return(
      <section className="tech">
        <div className="container">
          <h2 className="sect-title">Technologies</h2>
          <div className="tech__row">
            {
              listCoding.map((item, index)=>
                <div className={`tech__col ${item.index}`} key={index}>
                  <h3 className="tech__title">{item.title}</h3>
                  <p className="tech__descr">{item.descr}</p>
                </div>  
              )
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Technologies