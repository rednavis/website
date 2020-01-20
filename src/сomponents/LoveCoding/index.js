import React, { Component } from 'react'
import listCoding from './listCoding'
import Icons from './Icons'
import  './style.scss'

class LoveCoding extends Component{
  state = {
    active: false,
  }
  coding = React.createRef()
  
  componentDidMount(){
    window.addEventListener('scroll', this.addAnimation)
  }

  addAnimation = () =>{
    if(this.coding && this.coding.current) {
      let position = this.coding.current.offsetTop
      if(position){
        if(position > window.pageYOffset &&  position - 500 < window.pageYOffset){
          this.setState({active: true})
        }
      }
    }

  }

  render(){
    const { active } = this.state
    return(
      <section className="coding" ref={this.coding}>
        <div className="container">
          <h2 className="sect-title">In love with coding</h2>
          <div className="coding__row">
            <div className="coding__col">
              <p className="coding__text">We put all your strengths, efforts and knowledge to become number one in what we do. We never stop learning and only aim for the best</p>
              <p className="coding__text">Our  expertise allows to deliver complex software solutions making best choices for each particular project</p>
            </div>
            <div className="coding__col">
              <Icons active={active}/>
            </div>
          </div>
          <div className="coding__row">
            {
              listCoding.map((item, index)=>
                <div className="coding__col" key={index}>
                  <p className="coding__title">{item.title}</p>
                  <p className="coding__descr">{item.descr}</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}

export default LoveCoding