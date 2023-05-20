import icon from "./img/free-icon-pin-map-2435094 (1).png";

import styles from "./style.module.scss";

export const TargetAudience = () => {
  return (
    <ul className={styles.listPerfomanse}>
        <p className={styles.title}>Для кого этот курс</p>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}>Если вы хотите узнать больше о возможностях полимерной глины</p>
      </li>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}> Если вы работаете в техниках создания украшений(серьги, браслеты, броши, колье)</p>
      </li>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}>Если вы хотите научиться делать такие же бусины</p>
      </li>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}>Если вы хотите освоить надежную сборку украшений</p>
      </li>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}>Все знания из урока можно будет применить на практике для создания различных украшений</p>
      </li>
      <li className={styles.item}>
        <div>
          <img className={styles.icon} src={icon} alt="icon" />
        </div>
        <p className={styles.description}>Если вы хотите узнать больше о возможностях полимерной глины</p>
      </li>
    </ul>
  )}