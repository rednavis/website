import React, { Component } from 'react'
import SliderImages from './SliderImages'
import RoboticsList from './RoboticsList'
import './style.scss'

class Robotics extends Component{
  render(){
    return(
      <section className="robotics">
        <div className="container">
          <div className="robotics__title">
            <img src="assets/partners/robotics.svg" alt=""/>
          </div>
          <p className="sect-descr">The purpose of a partnership agreement with "Robotics and Cloud Technologies" LLC is to consolidate efforts to develop and implement high-performance computing systems for various industries. Robotics is a participant of international exhibitions and winner of prestigious awards in the field</p>
          <SliderImages />
          <RoboticsList />
        </div>
      </section>
    )
  }
}

export default Robotics