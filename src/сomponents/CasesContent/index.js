import React  from 'react'
import CasesWeb from './CasesWeb'
import  "./style.scss"

const CasesContent  = props => {
  const { cases, tag, tabs, changeActive } = props
  return (
   <section className="cases-cont">
    <div className="container">
      <div className="cases-cont-tabs">
        <div className="cases-cont-tabs__line"></div>
        <div className="cases-cont-tabs__cont">
          {
            tabs.map(item=>
              <div  className={`cases-cont-tabs__item ${item.active ? 'active' : ''}`} 
                    key={item.id}
                    onClick={()=>changeActive(item.id)}>
                <h2 className="cases-cont-tabs__title">{item.name}</h2>
                <div className="cases-cont-tabs__box">
                  <div className="cases-cont-tabs__dot"><span></span></div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <CasesWeb tag={tag} cases={cases} />
    </div>
   </section>
  ) 
}

export default CasesContent