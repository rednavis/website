import React, { Component, Fragment } from 'react';
import cases from '../../content/cases'
import {
  CasesContent,
  CasesHead,
} from '../../сomponents'
import './style.scss'

const tabs = [
  {id: 'web', name: 'Web', active: true},
  {id: 'mobile', name: 'Mobile', active: false}
  // {id: 'enterprise', name: 'Enterprise', active: false},
] 

class Cases extends Component {
  state = {
    cases: cases,
    tag: '',
    tabs: tabs
  }
  cases = React.createRef()
  
  changeActive = (id) =>{
    const { tabs } = this.state
    tabs.forEach(el=>{
      el.active = el.id === id ? true : false
    })
    this.setState({tabs: tabs, tag: id})
  }

  componentDidMount(){
    const { tabs } = this.state
    window.addEventListener('scroll', ()=>{
      if(this.cases && this.cases.current){
        let scroled = window.pageYOffset
        this.cases.current.style.top = -(scroled * 0.2) + 'px'  
      }
    })
    tabs.forEach(el=>{
      if(el.active){
        this.setState({tag: el.id})
      }
    })
  }
  render() {
    const { cases, tag, tabs } = this.state
    return (
      <Fragment>
        <div className="cases" ref={this.cases}></div>
        <main className="cases__content sect-animation">
          <CasesHead />
          <CasesContent cases={cases} 
                        tag={tag} 
                        tabs={tabs}
                        changeActive={this.changeActive}/>
        </main>
      </Fragment>
    );
  }
}

export default Cases