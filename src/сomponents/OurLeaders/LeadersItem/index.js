import React, { Fragment } from "react"
import {
  LinkedIn,
  Mail
} from '../icons'
import PropTypes from 'prop-types'


const LeadersItem = (props) => {
  const { leaders } = props
  return(
    <Fragment>
      {leaders.map((item, index) => (
        <div className="leaders__col" key={index}>
              <div className="leaders__item">
                <div className="leaders__img">
                  <img src={`assets/About/leaders/${item.image}.jpg`} alt={item.alt}/>
                  {
                    item.linkedIn || item.post ?
                      (<div className="leaders__icons">
                        {item.linkedIn ? <a className="leaders__link ln" href={item.linkedIn} target="blank"><LinkedIn /></a> : ''}
                        {item.post ? <a className="leaders__link ml" href={`mailto:${item.post}`} target="blank"><Mail /></a> : ''}
                      </div>) : ''
                  }
                </div>
                <p className="leaders__name">{item.name}</p>
                <p className="leaders__position">{item.position}</p>
              </div>
            </div>
        ))
      }
    </Fragment>
  )
}

LeadersItem.propTypes = {
  leaders: PropTypes.array
}

export default LeadersItem
