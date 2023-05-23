import styles from "./style.module.scss";
import React from "react";
import foto from './img/ferstLendingPhoto.jpg'
 
export const BannerBlock  = () => {
    return (<>
    <div className={styles.img_wrapper} />
        <p className={styles.price}>990 рублей</p>
    </>  );
}
 
