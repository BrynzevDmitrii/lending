import icon from "./img/googleIcon.svg";

import styles from "./style.module.scss";

export const PerfomanseBlock = () => {
  return (
    <ul className={styles.listPerfomanse}>
      <li>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <p>преимущество1</p>
      </li>
      <li>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <p>преимущество2</p>
      </li>
      <li>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <p>преимуществ3</p>
      </li>
      <li>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <p>преимущество4</p>
      </li>
    </ul>
  );
};
