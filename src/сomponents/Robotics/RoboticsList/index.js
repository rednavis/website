import React from 'react'
import list from './list'

const RoboticsList = () =>{
  return(
    <div className="robotics-list">
      <div className="robotics-list__row">
        {
          list.map((item, index)=>
            <div className="robotics-list__col" key={index}>
              <div className="robotics-list__icon">
                <img src={`assets/partners/${item.image}`} alt=""/>
              </div>
              <p className="robotics-list__text">{item.text}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default RoboticsList