import React, { Component } from "react"
import items from './items'
import  "./style.scss"
import WhyWorkItem from "./WhyWorkItem"

class WhyWork extends Component {
  
  render(){
    return (
      <section className="work">
        <div className="container">
          <h2 className="sect-title">Why work with us</h2>
          <div className="work__row">
            <WhyWorkItem items={items}/>
          </div>
        </div>
      </section>
    )
  } 
}

export default WhyWork