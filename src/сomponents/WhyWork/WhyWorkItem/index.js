import React, { Fragment } from "react"
import PropTypes from 'prop-types'

const WhyWorkItem = (props) => {
  const { items } = props
  return(
    <Fragment>
      {items.map((item, index) =>
        <div className="work__col" key={index}>
            <div className="work__item">
              <div className="work__box">
                <div className="work__img">
                  <img src={`assets/About/work/${item.img}.svg`} alt={item.title}/>
                </div>
                <h3 className="work__title">{item.title}</h3>
              </div>
              <p className="work__descr">{item.text}</p>
            </div>
          </div>
          )
      }
    </Fragment>
  )
}

WhyWorkItem.propTypes = {
  items: PropTypes.array
}

export default WhyWorkItem