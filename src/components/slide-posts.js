import React from 'react'
import ItemPost from './item-post'
import "../assets/css/slide-post.css"

const SlidePost = ({data}) => {
  return (
    <div className='container-slide-post'>
    <h2>{data.name}</h2>
    <div className='slide-post'>
        {data.articles.length > 0?
       data.articles.map((article, index) => (
           <ItemPost post={article} key={index} />
        )) :
        <p>There are no posts for this category</p>
    
    }
    </div>
</div>
  )
}

export default SlidePost