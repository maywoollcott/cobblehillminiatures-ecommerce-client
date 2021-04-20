import React from 'react'
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({items}) => {
  return (
    <div className={articleStyles.grid}>
      {items.map((item) => {
        return <ArticleItem item={item} />
      })}
    </div>
  )
}

export default ArticleList
