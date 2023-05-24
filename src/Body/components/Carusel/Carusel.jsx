import Carousel from 'react-bootstrap/Carousel';

import styles from "./style.module.scss"

export const  Corusel = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item >
        <div className={styles.box}>
          <div className={styles.item_first} />
          <div className={styles.item_thecont} />
          <div className={styles.item_third} />
        </div>
        </Carousel.Item>
      <Carousel.Item >
      <div className={styles.box}>
        <div className={styles.item_for} />
        <div className={styles.item_five} />
        <div className={styles.item_six} />
      </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}