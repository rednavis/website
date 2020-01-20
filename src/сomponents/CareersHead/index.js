import React, { Component } from 'react'
import './style.scss'

class CareersHead extends Component {
  careersHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.careersHead && this.careersHead.current){
        let scroled = window.pageYOffset
        this.careersHead.current.style.top = -(scroled * 0.3) + 'px'  
      }
    })
  }

  render(){
    return(
      <section className="careers-head">
        <div className="careers-head__paralax" ref={this.careersHead}></div>
        <div className="container">
          <div className="careers-head__content">
            <h1 className="careers-head__title">Careers</h1>
            <p className="careers-head__descr">We appreciate talented and motivated people. Are you looking for a perfect job and environment for professional growth? <br/>Join our team!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default CareersHead