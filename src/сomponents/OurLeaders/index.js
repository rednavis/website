import React, { Component } from 'react'
import ourLeaders from '../../content/ourLeaders'
import LeadersItem from "./LeadersItem"
// import { Link } from 'react-router-dom'
import  "./style.scss"


class OurLeaders  extends Component{
  state = {
    leaders: ourLeaders
  }

  componentDidMount(){
    const { leaders } = this.state
    this.setState({leaders: leaders.slice(0, 8)})
  }

  render(){
    const { leaders } = this.state
    return (
      <section className="leaders">
        <div className="container">
          <h2 className="sect-title">Our Leaders</h2>
          <p className="sect-descr">We are a team of passionate and experienced professionals united by the same goals and ideas. We love what we do and develop outstanding projects together</p>
          <div className="leaders__row">
            <LeadersItem leaders = {leaders}/>
          </div>
          {/* <div className="leaders__btn">
            <Link className="btn" to="/leaders">see more</Link>
          </div> */}
        </div>
      </section>
    )
  }
}

export default OurLeaders;