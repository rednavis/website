import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../../content/blog'
import './style.scss'
// const image = require()

const editText = (text, num) => {
  let shortText = text.substr(0, num)
  const length = shortText.lastIndexOf(' ')
  shortText = shortText.substr(0, length) + '...'
  return shortText
}

const BlogContent = () =>{
  return(
    <section className="blog-cont">
      <div className="container">
        <div className="blog-cont__row">
          {
            blog.map((item, index)=>
              <div className="blog-cont__col" key={index}>
                <Link to={`/blog/${item.id}`}className="blog-cont__item">
                  <div className="blog-cont__img" 
                       style={{backgroundImage: `url('${item.image}')`}}/>
                  <div className="blog-cont__box">
                    <h5 className="blog-cont__title">{item.title}</h5>
                    <p className="blog-cont__descr">{
                        editText(item.descr[0], 110)
                      }</p>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default BlogContent