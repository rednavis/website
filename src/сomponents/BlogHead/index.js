import React from 'react'
import './style.scss'

const BlogHead = () =>{
  return(
    <section className="blog-head">
      <div className="blog-head__bg">
        <div className="container">
          <h2 className="blog-head__title">Blog</h2>
          <p className="blog-head__descr">Here we share our knowledge, achievements, and trends in the software development sphere</p>
        </div>
      </div>
    </section>
  )
}

export default BlogHead