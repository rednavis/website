import React, { Component } from 'react'
import listIndustries from './listIndustries'
import IndustriesItem from './IndustriesItem'
import  './style.scss'

class Industries extends Component{
  render(){
    return(
      <section className="industries">
        <div className="container">
          <div className="industries__box">
            <h2 className="sect-title">Industries</h2>
            <div className="industries__row">
              <IndustriesItem listIndustries={listIndustries} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Industries