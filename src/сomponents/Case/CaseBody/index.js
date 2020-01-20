import React from 'react'
import PropTypes from 'prop-types'

const CaseBody = props =>{
  const { domain, challenge, solutions, technologies, solutionsList } = props
  return(
    <section className="case">
      <div className="container">
        <div className="case__col">
          <div className="case__title">
            <p>Domain area</p>
            <div className="case__icon">
              <img src={'/assets/singleCase/icons/icon-1.svg'} alt=""/>
            </div>
          </div>
          <div className="case__content">
            <p>{domain}</p>
          </div>
        </div>
        <div className="case__col">
          <div className="case__title">
            <p>Challenge</p>
            <div className="case__icon">
              <img src={'/assets/singleCase/icons/icon-2.svg'} alt=""/>
            </div>
          </div>
          <div className="case__content">
            <p>{challenge}</p>
          </div>
        </div>
        <div className="case__col">
          <div className="case__title">
            <p>Solutions</p>
            <div className="case__icon">
              <img src={'/assets/singleCase/icons/icon-3.svg'} alt=""/>
            </div>
          </div>
          <div className="case__content">
            {
              solutions.length > 1 ?
              solutions.map((item, index)=>
                <p key={index}>{item}</p>
              ) : solutions
            }
            <ul>
              {
                solutionsList ? 
                solutionsList.map((item, index)=>
                  <li key={index}>{`${index+1}) ${item}`}</li>
                ) : ''
              }
            </ul>
          </div>
        </div>
        <div className="case__col">
          <div className="case__title">
            <p>Technologies</p>
            <div className="case__icon">
              <img src={'/assets/singleCase/icons/icon-4.svg'} alt=""/>
            </div>
          </div>
          <div className="case__content">
            <p>{technologies}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

CaseBody.propTypes = {
  domain: PropTypes.string, 
  challenge: PropTypes.string, 
  solutions: PropTypes.array, 
  technologies: PropTypes.string, 
  solutionsList: PropTypes.array
}

export default CaseBody