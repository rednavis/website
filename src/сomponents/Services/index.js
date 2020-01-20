import React, { Component } from 'react'
import listServices from './listServices'
import  './style.scss'
import ServicesItem from './ServicesItem'

class Services extends Component{
  render(){
    return(
      <section className="services">
        <div className="container">
          <h2 className="sect-title">Services</h2>
          <div className="services__row">
            <ServicesItem listServices={listServices} />
          </div>
        </div>
      </section>
    )
  }
}

export default Services