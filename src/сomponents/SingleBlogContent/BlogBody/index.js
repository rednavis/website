import React from 'react'

const BlogBody = props => {
  const { description, image, id } = props
  return(
    <section className="blog-body">
      <div className="container">
        <ul className="blog-body__list">
          <img src={image} alt={id}/>
          {
            description.map((item, index) =>
              <li className="blog-body__item" key={index} dangerouslySetInnerHTML={{__html: item}}>
              </li>
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default BlogBody