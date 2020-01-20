import React, { Component } from 'react'
import './style.scss'

class PartnersHead extends Component {
  partnersHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.partnersHead && this.partnersHead.current){
        let scroled = window.pageYOffset
        this.partnersHead.current.style.top = -(scroled * 0.3) + 'px'  
      }
    })
  }

  render(){
    return(
      <section className="partners-head">
        <div className="partners-head__paralax" ref={this.partnersHead}></div>
        <div className="container">
          <div className="partners-head__content">
            <h1 className="partners-head__title">Partners</h1>
            <p className="partners-head__descr">REDNAVIS supports relationships with partner companies for ensuring services in software development and consulting</p>
          </div>
        </div>
      </section>
    )
  }
}

export default PartnersHead