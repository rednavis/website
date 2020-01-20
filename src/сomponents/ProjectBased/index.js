import React from 'react'
import agile from './agile'
import project from './project'
import './style.scss'

const ProjectBased = () =>{
  return(
    <section className="pro-based">
      <div className="pro-based__container">
        <div className="container">
          <h2 className="sect-title">Process</h2>
          <div className="pro-based-project">
            {
              project.map((item, index)=>
                <div className={`pro-based-project__col ${item.index}`} key={index}>
                  <img className="pro-based-project__img" src={`assets/process/project/${item.image}`} alt=""/>
                  <div className="pro-based-project__dots"><span></span></div>
                  <p className="pro-based-project__text">{item.text}</p>
                </div>
              )
            }
            <div className="pro-based-project__line">
              <img src="assets/process/pro-line2.svg" alt=""/>
            </div>
          </div>
          <h2 className="sect-title pro-based-agile__title">Agile</h2>
          <div className="pro-based-agile">
            {
              agile.map((item, index)=>
                <div className={`pro-based-agile__col ${item.index}`} key={index}>
                  <img className="pro-based-agile__img" src={`assets/process/agile/${item.image}`} alt=""/>
                  <p className="pro-based-agile__text">{item.text}</p>
                  <img className="pro-based-agile__arr" src="assets/process/agile-arr.svg" alt=""/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBased