import React, { Component } from "react"
// import Icon from './icon'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import  "./style.scss"

class WelcomeHead extends Component{
  welcomeHead = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.welcomeHead && this.welcomeHead.current){
        let scroled = window.pageYOffset
        this.welcomeHead.current.style.top = -(scroled * 0.3) + 'px'  
      }
    })
  }

  render(){
    return (
      <section className="welcome-head">
       <div className="welcome-head__paralax" ref={this.welcomeHead}></div>
       <div className="container">
         <div className="welcome-head__item"> 
           <h1 className="welcome-head__title">Welcome to REDNAVIS</h1>
           <p className="welcome-head__descr">We are Java professionals in software solutions development for various industries</p>
         </div>
       </div>
       {/* <div className="welcome-head__arr"><AnchorLink href="#benefits" offset='80'><Icon /></AnchorLink></div> */}
      </section>
     )
  }
}

export default WelcomeHead