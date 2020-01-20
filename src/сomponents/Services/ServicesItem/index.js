import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ServicesItem = (props) => {
  const { listServices } = props
  return(
    <Fragment>
      {
        listServices.map((item, index) => (
          <div className="services__col" key={index}>
            <div className="services__item">
              <div className="services__front">
                <div className="services__top">
                  <img className="services__img" src={`assets/Solutions/Services/${item.image}.svg`} alt={item.title} />
                  <p className="services__title">{item.title}</p>
                </div>
                <p className="services__descr">{item.descr}</p>
              </div>
              <div className="services__back">
                <p className="services__descr">{item.back}</p>
              </div>
            </div>
          </div>
        ))
      }
    </Fragment>
  )
}

ServicesItem.propTypes = {
  listServices: PropTypes.array
}

export default ServicesItem