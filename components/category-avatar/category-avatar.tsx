import Link from 'next/link';
import Image from 'next/image';

import styles from './category-avatar.module.scss';
import uStyles from '../../styles/utils.module.scss';


const CategoryAvatar = ({title, background}) => {

  return (
    <>
     <Link href='#'>
      <div className={styles.avatar}>
        <div className={uStyles.overlay}></div>
        <div className={styles.categoryBg}>
          <Image src={background} objectFit='cover' width={150} height={150} />
        </div>
        <label>{title}</label>
      </div>
     </Link>
    </>
  );
}

export default CategoryAvatar;