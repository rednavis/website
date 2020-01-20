import React, { Component } from 'react'
import './style.scss'

class Mission extends Component{
  render(){
    return(
      <section className="mission">
        <div className="container">
          <h2 className="sect-title">Mission</h2>
          <p className="sect-descr">Our mission is to deliver perfect software, focusing on service quality, adopting best practices, high API maturity, and scalability as well as focus on having the technological advantage and automatization of daily tasks like environment deployment</p>
        </div>
      </section>
    )
  }
}

export default Mission