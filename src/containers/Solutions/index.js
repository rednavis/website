import React, { Component, Fragment } from 'react';

import {
  SolutionsHead,
  Services,
  Industries,
  Technologies
} from '../../сomponents'
import './style.scss'

class Solutions extends Component {
  solutions = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.solutions && this.solutions.current){
        let scroled = window.pageYOffset
        this.solutions.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="solutions" ref={this.solutions}></div>
        <main className="solutions__content sect-animation">
          <SolutionsHead />
          <Services />
          <Industries />
          <Technologies />
        </main>
      </Fragment>
    );
  }
}

export default Solutions;
