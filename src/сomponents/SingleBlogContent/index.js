import React, { Fragment } from 'react'
import blog from '../../content/blog'
import BlogBody from './BlogBody'
import './style.scss'

const SingleBlogContent = ({match}) =>{
  return(
    blog.map(item=>
      match.params.id === item.id ? (
        <Fragment key={item.id}>
          <section className="blog-single">
            <div className="blog-single__bg">
              <div className="container">
                <h2 className="blog-single__title">{item.title}</h2>
              </div>
            </div>
          </section>
          <BlogBody description={item.descr} image={item.imageSmall} id={item.id}/>
        </Fragment>
      ) : ''
    )
  )
}

export default SingleBlogContent