import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import uStyles from '../styles/utils.module.scss';
import Search from '../public/icon/search.svg';
import Down from '../public/icon/south.svg';
import MenuBar from '../components/menu-bar/menu-bar';
import 'animate.css';
import CategoryAvatar from '../components/category-avatar/category-avatar';

export default function Home() {
  return (
   <div>
     <MenuBar />
     <section className={styles.hero}>
      <div className={uStyles.overlay}></div>
      <div className={styles.heroBg}>
        <Image src='/img/hero-1.jpg' objectPosition='0 54%' objectFit='cover' layout='fill' />
      </div>
      <div className={styles.content}>
        <h1>Trovi delle Ricette</h1>
        <form>
          <input type="text"/>
          <div className={styles.searchIcon}>
            <Search width="30" height="30" fill='#00000094' />
          </div>
        </form>
        <div className={styles.scroll}>
          <small>scroll down</small>
          <Down width={21} 
                height={21} 
                fill='white' 
                className='animate__animated animate__shakeY animate__slow animate__repeat-2' 
                />
        </div>
      </div>
     </section>
     <section className={styles.typeOfFood}>
       <div className={uStyles.container}>
        <p>QUAL È IL TUO PREFERITO?</p>
        <h3>Sceglie tra nostre categorie:</h3>
        <div className={styles.categories}>
          <CategoryAvatar title='Salate' 
                          background='/img/hero-1.jpg' 
                          />
          <CategoryAvatar title='Dolce' 
                          background='/img/hero-1.jpg' 
                          />
          <CategoryAvatar title='Sane' 
                          background='/img/hero-1.jpg' 
                          />
        </div>
        <h1>HAHAHAH</h1>
       </div>
     </section>
   </div>
  )
}
