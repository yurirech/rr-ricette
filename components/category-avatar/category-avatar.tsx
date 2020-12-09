import Link from 'next/link';
import Image from 'next/image';

import styles from './category-avatar.module.scss';
import uStyles from '../../styles/utils.module.scss';

interface CategoryAvatarProps {
  title: string,
  background: string
}

const CategoryAvatar = ({title, background}: CategoryAvatarProps) => {

  return (
    <>
     <Link href='#'>
      <div className={styles.avatar}>
        <div className={uStyles.overlay}></div>
        <div className={styles.categoryBg}>
          <Image src={background} objectFit='cover'  layout='fill' />
        </div>
        <label>{title}</label>
      </div>
     </Link>
    </>
  );
}

export default CategoryAvatar;