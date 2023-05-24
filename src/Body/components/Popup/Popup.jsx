import styles from './style.module.scss'
import { SocialFollow } from '../SocialFollow/SocialFollow'

export const Popup = (props) => {

    return (
      <div className={styles.blure_wrapper}>
        <div className={styles.popup_container}>
            {
                props.title ?
                <div className={styles.title}>Ваша заявка принята! <span>Наш менеджер скоро с Вами свяжется</span></div>:
                <><div className={styles.title__error}>Возникла ошибка. Попробуйте еще раз или свяжитесь с нами в соцсетях </div></>
            }
         
          <div className={styles.btn_section}>
            <button onClick={() => props.handleChange(false)} className={styles.yellow_btn}>
              Хорошо
            </button>
           
          </div>
          <SocialFollow />
        </div>
      </div>
    )
}