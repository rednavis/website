import React, { Component, Fragment } from 'react';
import {
  ProcessHead,
  CprModels,
  ProjectBased,
} from '../../сomponents'
import './style.scss'


class Process extends Component {
  process = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      if(this.process && this.process.current){
        let scroled = window.pageYOffset
        this.process.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="process" ref={this.process}></div>
        <main className="process__content sect-animation">
          <ProcessHead />
          <ProjectBased />
          <CprModels />
        </main>
      </Fragment>
    );
  }
}

export default Process