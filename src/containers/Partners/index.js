import React, { Component, Fragment } from 'react'
import { 
  PartnersHead,
  Robotics
} from '../../сomponents'
import './style.scss'

class Partners extends Component{
  partners = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.partners && this.partners.current){
        let scroled = window.pageYOffset
        this.partners.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }

  render(){
    return(
      <Fragment>
        <div className="partners" ref={this.partners}></div>
        <main className="partners__content sect-animation">
          <PartnersHead />
          <Robotics />
        </main>
      </Fragment>
    )
  }
}

export default Partners