import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderItem = (props) => {
  const { navList, hiddenNav } = props
  let path = window.location.pathname
  return(
    <Fragment>
      {
        navList.map((item, index) =>(
          <li className="nav__item" key={index}>
            <NavLink className={`nav__link ${item.link === path ? 'act' : ''}`} to={item.link} onClick={hiddenNav}>
              {item.linkName}
            </NavLink>  
          </li>
        ))
      }
    </Fragment>
  )
}

export default HeaderItem