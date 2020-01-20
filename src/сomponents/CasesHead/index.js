import React, { Component }  from 'react'
import  "./style.scss"

class CasesHead extends Component{
  casesHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.casesHead && this.casesHead.current){
        let scroled = window.pageYOffset
        this.casesHead.current.style.top = -(scroled * 0.3) + 'px'  
      }
    })
  }

  render(){
    return (
      <section className="cases-head">
        <div className="cases-head__paralax" ref={this.casesHead}></div>
        <div className="container">
          <h1 className="cases-head__title">Cases</h1>
          <p className="cases-head__descr">We are Java professionals at software solutions for all industries</p>
        </div>
      </section>
    ) 
  }
}

export default CasesHead