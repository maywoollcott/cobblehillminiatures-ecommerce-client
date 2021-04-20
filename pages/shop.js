import ArticleList from '../components/ArticleList'
import React from 'react'
import styles from '../styles/shop.module.css'
import Nav from '../components/Nav'

const shop = ({items}) => {
  return (
    <div className={styles.shopContainer}>
      <Nav/>
      <div className={styles.shopBody}>
        <ArticleList items={items}></ArticleList>
        <ArticleList items={items}></ArticleList>
      </div>
    </div>
  )
}

export default shop

export const getStaticProps = async () => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const items = await res.json();

  return {
    props: {
      items
    }
  }
}
