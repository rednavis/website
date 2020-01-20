import React, { Fragment } from "react"
import PropTypes from 'prop-types';

const BenefitsItem = (props) => {
  const { listBenefits } = props
  return (
    <Fragment>
    { 
      listBenefits.map((item, index) => (
        <div className="benefits__col" key={index}>
            <div className="benefits__img">
              <img src={`assets/About/benefits/${item.img}.svg`} alt={item.title}></img>
            </div>
            <div>
              <p className="benefits__title">{item.titleTop}</p>
              <p className="benefits__title">{item.titleBottom}</p>
            </div>
        </div>
      ))
    } 
  </Fragment>
  )
}

BenefitsItem.propTypes = {
  listBenefits: PropTypes.array.isRequired
}


export default BenefitsItem