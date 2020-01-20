import React from 'react'
import icons from './icons'

const Icons = ({active}) =>{
  return(
    <div className="coding-icons">
      <div className="coding-icons__container">
        {
          icons.map((item, index)=>
            <div className={`coding-icons__name ${item.index} ${active ? 'animation' : ''}`} key={index}>
              <img src={`/assets/Solutions/coding/${item.image}`} alt=''/>
            </div>
          )
        }
        <img className="coding-icons__box left" src="/assets/Solutions/coding/conv-left.svg" alt="" />
        <img className="coding-icons__box right" src="/assets/Solutions/coding/conv-right.svg" alt="" />
      </div>
    </div>
  )
}

export default Icons