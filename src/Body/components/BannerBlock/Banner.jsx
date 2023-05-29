import styles from "./style.module.scss";
import React from "react";
import { Corusel } from "../Carusel/Carusel";
 
export const BannerBlock  = () => {
    return (<>
    <div className={styles.img_wrapper}>
        <Corusel />
        </div>
        <p className={styles.price}>990 рублей</p>
    </>  );
}
 
