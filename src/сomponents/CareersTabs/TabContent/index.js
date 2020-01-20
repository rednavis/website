import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TabContent = props =>{
  const { description, text1, text2, link } = props
  return(
    <ul className="careers-tabs-cont__descr">
      {text1 ? <p>{text1}</p> : ''}
      {text2 ? <p>{text2}</p> : ''}
      {
        description.map((item, index)=>
          <li key={index}>{item}</li>
        )
      }
      {link ? <Link to={link}><p className="careers-tabs-cont__devby">dev. by</p></Link> : ''}
    </ul>
  )
}

TabContent.propTypes = {
  description: PropTypes.array,
  text1: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string
}

export default TabContent