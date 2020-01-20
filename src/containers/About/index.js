import React, { Component, Fragment } from 'react'

import {
    WelcomeHead,
    Benefits,
    Mission,
    WhyWork,
    OurLeaders,
    // Testimonials,
    Vision,
    Clients
} from '../../сomponents'

import './style.scss';

class About extends Component {
  about = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.about && this.about.current){
        let scroled = window.pageYOffset
        this.about.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }
  render() {
    return (
      <Fragment>
          <div className="about" ref={this.about}></div>
          <main className="about__content sect-animation">
            <WelcomeHead />
            <Benefits />
            <Mission />
            <Vision />
            <WhyWork />
            <Clients />
            <OurLeaders />
            {/* <Testimonials /> */}
          </main>
      </Fragment>
    );
  }
}

export default About;
