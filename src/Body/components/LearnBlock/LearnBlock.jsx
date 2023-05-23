import styles from "./style.module.scss";

export const LearnBlock = () => {
const anchor = ()=> {
  window.location.href = "#contactForm";
}

  return (
    <ul className={styles.listPerfomanse}>
    <p className={styles.title}>Что будет :</p>
  <li className={styles.item}>
    <p className={styles.description}>✅ Подготовка материала</p>
  </li>
  <li className={styles.item}>

    <p className={styles.description}> ✅ Два способа составления тростей с рисунком лепестка для бутонов</p>
  </li>
  <li className={styles.item}>
  
    <p className={styles.description}>✅ Лепка цветочных бутонов без основ</p>
  </li>
  <li className={styles.item}>
    <p className={styles.description}>✅ Два варианта лепки лепестков</p>
  </li>
  <li className={styles.item}>
    <p className={styles.description}>✅ Создание дополнительных бусин для колье</p>
  </li>
  <li className={styles.item}>
    <p className={styles.description}>✅ Нюансы тонировки полимерной глиной</p>
  </li>
  <li className={styles.item}>
    <p className={styles.description}>✅ Правильная сборка на шнуры (2 варианта)</p>
  </li>
  <li className={styles.item}>
    <p className={styles.description}>✅ Секрет прочного крепления украшений</p>
  </li>

  <button className={styles.btn_anchor} onClick={()=>anchor()}>Купить курс</button>
</ul>
  )}