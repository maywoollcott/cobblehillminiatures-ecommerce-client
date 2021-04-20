import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import homeStyles from '../styles/home.module.css'
import Nav from '../components/Nav'

//fetch the articles at the bottom then bring them i here at home, then pass at list
export default function Home() {
  return (
    <div className={homeStyles.landingContainer}>
      <Head>
          <title>Cobble Hill Miniatures</title>
          <meta name='keywords' content='dollhouse wallpaper, miniature wallpaper, dollhouses, miniatures'/>
      </Head>
      <Nav/>
      <div className={homeStyles.landingContent}>
        <h1>Your miniature wallpaper destination</h1>
        <img src="/assets/landingimage1.png" alt="" width={500}/>
      </div>
    </div>
  )
}


