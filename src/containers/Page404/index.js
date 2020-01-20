import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { PopupForm } from '../../сomponents'

class Page404 extends Component{
  state = {
    popup: false
  }

  openPopup = () =>{
    this.setState({popup: !this.state.popup})
  }

  render(){
    const { popup } = this.state
    return(
      <section className="page">
        <div className="container">
          <div className="page__image">
            <img src="/assets/404/4.svg" alt=""/>
            <img src="/assets/404/earth.svg" alt=""/>
            <img src="/assets/404/4.svg" alt=""/>
          </div>
          <p className="page__text">Sorry, the page you were looking for could not be found.
          <br/>You can return to our <Link to="/">homepage</Link> or <a href="mailto:info@rednavis.com">contact us</a> if you can't find what you are looking for.
          </p>
          {/* <div className="btn" onClick={this.openPopup}>CONTACT US</div> */}
        <Link to="/" className="page__link"><p>rednavis.com</p></Link>
        </div>
        <PopupForm popup={popup} openPopup={this.openPopup}/>
      </section>
    )
  }
}

export default Page404