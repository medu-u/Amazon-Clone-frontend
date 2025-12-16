import React from 'react'
import {categoryInfos} from './CategoryFullInfos';
import CategoryCards from './CategoryCards'
import styles from './Category.module.css';

function Category() {
  return (
    <section className={styles.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCards key={infos.id} data={infos} />
      ))}
    </section>
  );
}

export default Category
