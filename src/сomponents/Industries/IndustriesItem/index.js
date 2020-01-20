import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const IndustriesItem = (props) => {
  const { listIndustries } = props
  return(
    <Fragment>
      {
        listIndustries.map((item, index) =>(
          <div className="industries__col" key={index}>
            <div className="industries__img">
              <img src={`assets/Solutions/Industries/${item.image}.svg`} alt={item.content}/>
            </div>
            <p className="industries__title">{item.content}</p>
          </div>
        ))
      }
    </Fragment>
  )
}

IndustriesItem.propTypes = {
  listIndustries: PropTypes.array
}

export default IndustriesItem