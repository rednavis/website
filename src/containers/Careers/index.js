import React, { Component, Fragment } from 'react'
import {
  CareersHead,
  CareersTabs,
  WeOffer,
  CarporateLife
  } from '../../сomponents'
import './style.scss'

class Careers extends Component{
  careers = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.careers && this.careers.current){
        let scroled = window.pageYOffset
        this.careers.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }

  render(){
    return(
      <Fragment>
        <div className="careers" ref={this.careers}></div>
        <main className="careers__content sect-animation">
          <CareersHead />
          <CareersTabs />
          <WeOffer />
          <CarporateLife />
        </main>
      </Fragment>
    )
  }
}

export default Careers