import React, { Component } from 'react'
import './style.scss'

class ProcessHead extends Component{
  processHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.processHead && this.processHead.current){
        let scroled = window.pageYOffset
        this.processHead.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }
  render(){
    return(
      <section className="process-head">
        <div className="process-head__paralax" ref={this.processHead}></div>
        <div className="container">
          <h1 className="process-head__title">Workflow</h1>
          <p className="process-head__descr">We are flexible in using classic (Waterfall) and modern (Agile/Scrum) methodologies depending on the client's needs and business model. Such approach allows us to create a perfect balance and working environment achieving best results</p>
        </div>
      </section>
    )
  }
}

export default ProcessHead