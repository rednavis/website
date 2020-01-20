import React, { Fragment } from 'react'
import { SingleBlogContent } from '../../сomponents'

const SingleBlog = ({match}) =>{
  return(
    <Fragment>
      <div className="sect-animation">
        <SingleBlogContent match={match}/>
      </div>
    </Fragment>
  )
}

export default SingleBlog