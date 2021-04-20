import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link';

const ArticleItem = ({item}) => {
  console.log(item)
  return (
    <Link href={`/item/${item.id}`}>
      <a className={articleStyles.card}>
        <div className="imageContainer">
          <img className={articleStyles.mainImage} src="./assets/mockups/greenbranch.jpg" alt=""/>
          <img className={articleStyles.hoverImage} src="./assets/mockups/greenbranchdetail.jpg" alt=""/>
        </div>
        {/* <h3>{item.title}</h3> */}
        <h3>Green Branch</h3>
        <p>$8.50</p>
      </a>
    </Link>
  )
}

export default ArticleItem
