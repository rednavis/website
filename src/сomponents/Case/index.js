import React, { Fragment } from 'react'
import cases from '../../content/cases'
import CaseBody from './CaseBody'
import './style.scss'

const Case = ({match}) =>{
  return(
    cases.map(item=>
      match.params.id === item.id ? (
        <Fragment key={item.id}>
          <section className="cases-head single" style={{backgroundImage: `url("/assets/singleCase/${item.image}")`}}>
            <div className="container">
              <h2 className="cases-head__title">{item.name}</h2>
              <p className="cases-head__descr">{item.descr}</p>
            </div>
          </section>
          <CaseBody id={item.id} 
                    domain={item.domain}
                    challenge={item.challenge}
                    solutions={item.solutions}
                    technologies={item.technologies}
                    solutionsList={item.solutionsList ? item.solutionsList : null}/>
        </Fragment>
      ) : ''
    )
  )
}

export default Case