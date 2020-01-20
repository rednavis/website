import React, { Component, Fragment } from 'react'
import {
  LinkedIn,
  Mail
} from './icons'
import TabContent from './TabContent'
import careers from '../../content/careers'
import './style.scss'

class CareersTabs extends Component{
  state = {
    content : careers
  }

  componentDidMount(){
    window.addEventListener('resize', ()=>{
      const { content } = this.state
      content.forEach(el =>{
        el.active = false
      })
      content[0].active = true
      this.setState({content: content})
    })
  }

  openTab = (i) =>{
    const { content } = this.state
    content.forEach(el =>{
      el.active = false
    })
    content[i].active = true
    this.setState({content: content})
  }

  openTabMob = (i) =>{
    const { content } = this.state
    content[i].active = !content[i].active
    this.setState({content: content})
  }

  render(){
    const { content } = this.state
    return(
      <section className="careers-tabs" >
        <div className="container">
          <h2 className="sect-title">Our openings</h2>
          <div className="careers-tabs-cont">
            <div className="careers-tabs-cont__tabs" >
              {
                content.map((item, index)=>
                  <p className={`careers-tabs-cont__link ${item.active ? 'active' : ''}`} key={index} onClick={()=>this.openTab(index)}>{item.title}</p>
                )
              }
            </div>
            {
              content.map((item, index)=>
                <Fragment key={index}>
                  <p className={`careers-tabs-cont__mob ${item.active ? 'active' : ''}`} onClick={()=>this.openTabMob(index)}>{item.title}</p>
                  <div className={`careers-tabs-cont__item ${item.active ? 'active' : ''}`}>
                      <div className="careers-tabs-cont__content">
                        <p className="careers-tabs-cont__title">{item.title}</p>
                        <TabContent description={item.descr} 
                                    text1={item.text1 ? item.text1 : null} 
                                    text2={item.text2 ? item.text2 : null}
                                    link={item.link}/>
                      </div>
                      <div className="careers-tabs-cont-right">
                        <p className="careers-tabs-cont-right__name">{item.position}</p>
                        <div className="careers-tabs-cont-right__img">
                          <img src={`assets/About/leaders/${item.image}`} alt={item.alt}/>
                        </div>
                        <p className="careers-tabs-cont-right__title">{item.name}</p>
                        <div className="careers-tabs-cont-right__icons">
                          <div className="careers-tabs-cont-right__link">
                            <a href={item.linkedin} target="blank"><LinkedIn /></a>
                          </div>
                          <div className="careers-tabs-cont-right__link">
                            <a href={`mailto:${item.email}`} target="blank"><Mail /></a>
                          </div>
                        </div>
                      </div>
                  </div>
                </Fragment>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}

export default CareersTabs