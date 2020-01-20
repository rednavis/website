import React, { Component, Fragment } from "react"
import { NavLink } from 'react-router-dom'
import HeaderItem from "./HeaderItem"
import { PopupForm } from '../../сomponents'
import Icon from './icon'
import list from './list'
import  "./style.scss"

class Header extends Component{
  state = {
    navList: list,
    popup: false,
    fixed: false,
    navigation: false,
    closeForm: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.addFixed)
  }

  addFixed = () =>{
    let fixed 
    if(window.pageYOffset > 0){
      fixed = true
    }else{
      fixed = false
    }
    this.setState({fixed: fixed, navigation: false})
  }

  openPopup = () =>{
    this.setState({popup: !this.state.popup})
  }

  toggleNav = () =>{
    this.setState({navigation: !this.state.navigation})
  }

  hiddenNav = () =>{
    this.setState({navigation: false})
  }

  render(){
    const { navList, popup, fixed, navigation, closeForm } = this.state
    return (
      <Fragment>
        <header className={`header ${fixed ? 'fixed' : ''}`}>
          <div className="container">
            <div className="header__row">
                <ul className="header__col header__burger" onClick={this.toggleNav}>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="header__col"> 
                  <NavLink className="header__logo" to="/"><img src="/assets/logo.svg" alt="logo"/></NavLink>
                </div>
                <div className={`nav-close ${navigation ? 'active' : ''}`} onClick={this.hiddenNav}></div>
                <nav className={`header__col nav ${navigation ? 'open' : ''}`}> 
                  <ul className="nav__list">
                    <HeaderItem navList={navList} hiddenNav={this.hiddenNav}/>
                  </ul>
                </nav>
                <div className="header__col"> 
                  <div className="btn" id="contact-btn" onClick={this.openPopup}>Contact Us</div>
                  <div className="header__btn_mobile" onClick={this.openPopup}><Icon /></div>
                </div>
            </div>
          </div>
        </header>
        <PopupForm popup={popup} openPopup={this.openPopup} closeForm={closeForm} />
      </Fragment>
    )
  }
}

export default Header