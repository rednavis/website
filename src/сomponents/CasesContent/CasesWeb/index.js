import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CasesWeb = props =>{
  const { cases, tag } = props
  return(
    <div className="cases-tab">
      <div className="cases-tab__row">
        {
          cases.map((item)=>
            item.tag === tag ? (
              <div className="cases-tab__col" key={item.id}>
                <Link to={`/cases/${item.id}`} className="cases-tab__item">
                  <h3 className="cases-tab__title">{item.name}</h3>
                  <p className="cases-tab__descr">{item.technologies}</p>
                </Link>
              </div>
            ) : ''
          ) 
        }
      </div>
    </div>
  )
}

CasesWeb.propTypes = {
  cases: PropTypes.array, 
  tag: PropTypes.string
}

export default CasesWeb