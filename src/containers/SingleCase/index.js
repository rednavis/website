import React, { Fragment } from 'react'
import { Case } from '../../сomponents'

const SingleCase = ({match}) =>{
  return(
    <Fragment>
      <div className="sect-animation">
        <Case match={match}/>
      </div>
    </Fragment>
  )
}

export default SingleCase