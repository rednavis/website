import React from "react"
import { Link } from 'react-router-dom';
import {
  Facebook,
  LinkedIn,
  Be,
  DevBy,
  // GitHub
} from './icons' 
import  './style.scss'

// const path = window.location.pathname

const mails = [
  {mail: 'info@rednavis.com'},
  {mail: 'sales@rednavis.com'},
  {mail: 'hr@rednavis.com'}
]

const Footer = () =>{
    return (
      <footer className="footer">
        <div className="container"> 
          <div className="footer__logo">
            <Link to="/"><img className="footer__logo-link" src="/assets/logo.svg" alt="logo"></img></Link>
          </div>
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__mail">
                {
                  mails.map((item, index)=>
                    <p key={index}><a href={`mailto:${item.mail}`}>{item.mail}</a></p>
                  )
                }
              </div>
              <div className="footer__icons">
                <a className="footer__icons_link" href="https://www.facebook.com/rednavis/" target="blank"><Facebook /></a>
                <a className="footer__icons_link" href="https://www.linkedin.com/company/rednavis/" target="blank"><LinkedIn /></a>
                <a className="footer__icons_link" href="https://www.behance.net/nevmerjonof270" target="blank"><Be /></a>
                {/* <a className="footer__icons_link" href="/" target="blank"><GitHub /></a> */}
                <a className="footer__icons_link" href="https://companies.dev.by/rednavis" target="blank"><DevBy /></a>
              </div>
            </div>
            <div className="footer__col footer-contacts">
              <div className="footer-contacts__left">
                <p className="footer-contacts__address">
                  <a href="https://goo.gl/maps/nEZYYU4fDdD2vJKA6" target="blank">USA, Wyoming <br/>30 N Gould St., STE R <br/>Sheridan, WY 82801</a>
                </p>
                <a href="tel:+19292435159" className="footer-contacts__phone">+1 929 243 5159</a>
              </div>
            </div>
            <div className="footer__col footer-contacts">
              <div className="footer-contacts__right">  
                <p className="footer-contacts__address">
                  <a href="https://goo.gl/maps/CeoJFyatXEdCYXMa6" target="blank">Belarus, Minsk<br/> Dzerzhinskogo ave 104<br/> office 8001</a>
                </p>
                <a href="tel:+375173602887" className="footer-contacts__phone">+375 (17) 360 28 87</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
} 

export default Footer