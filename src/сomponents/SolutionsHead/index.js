import React, { Component } from 'react'
import './style.scss'

class SolutionsHead extends Component{
  solutionHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.solutionHead && this.solutionHead.current){
        let scroled = window.pageYOffset
        this.solutionHead.current.style.top = -(scroled * 0.3) + 'px'  
      }
    })
  }

  render(){
    return(
      <section className="solution-head">
        <div className="solution-head__paralax" ref={this.solutionHead}></div>
        <div className="container">
          <h1 className="solution-head__title">Solutions</h1>
          <p className="solution-head__descr">REDNAVIS provides software solutions through the seamless integration of high-level domain expertise with modern development technologies</p>
        </div>
      </section>
    )
  }
}

export default SolutionsHead