import Carousel from 'react-bootstrap/Carousel';

import styles from "./style.module.scss"

export const  Corusel = () => {
  return (
    <Carousel slide={true} fade controls={false} pause={'hover'} interval={2000}>
      <Carousel.Item >
        <div className={styles.box}>
          <div className={styles.item_first} />
        </div>
        </Carousel.Item>
        <Carousel.Item  >
        <div className={styles.box}>
         <div className={styles.item_thecont} />
        </div>
        </Carousel.Item>
        <Carousel.Item interval={2000} >
        <div className={styles.box}>
          <div className={styles.item_third} />
        </div>
        </Carousel.Item  >
      <Carousel.Item interval={2000} >
      <div className={styles.box}>
        <div className={styles.item_for} />
      </div>
      </Carousel.Item>
      <Carousel.Item >
      <div className={styles.box}>
        <div className={styles.item_five} />
      </div>
      </Carousel.Item>
      <Carousel.Item >
      <div className={styles.box}>
        <div className={styles.item_six} />
      </div>
      </Carousel.Item>
    </Carousel>
  );
}