import Head from 'next/head';
import Link from 'next/link';
import Search from '../../public/icon/search.svg';
import Login from '../../public/icon/login.svg';
import Register from '../../public/icon/person_add.svg';
import styles from './menu-bar.module.scss';
import uStyles from '../../styles/utils.module.scss';

const MenuBar = () => {

  return (
    <>
      <menu className={`${styles.menu}`}>
        <div className={`${uStyles.container} ${styles.container}`}>
          <div className={styles.login}>
            <Link href='#'>
              <a>
                <Login width={22} height={22} fill='#147926' />
                Accedi
              </a>
            </Link>
            <Link href='#'>
              <a>
                <Register width={22} height={22} fill='#147926' />
                Registrati
              </a>
            </Link>
          </div>
          <div className={styles.brand}>
            <h4>Libro di Ricette RR</h4>
          </div>
          <div className={styles.search}>
            <form>
              <input placeholder='Cerca' type="text"/>
              <Search className={styles.searchIcon} width={24} height={24} fill='#00000094' />
            </form>
          </div>
        </div>
      </menu>
    </>
  );
}

export default MenuBar;