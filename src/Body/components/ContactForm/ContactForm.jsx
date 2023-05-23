import React from "react"
import styles from "./style.module.scss"
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
export const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Записаться на курс')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name,lastName, email, phone} = e.target.elements
        let conFom = {
          Name: name.value,
          LastName: lastName.value,
          Email: email.value,
          Phone: phone.value
        }
        console.log(conFom)
        axios.post("https://sheet.best/api/sheets/7f1d52ad-1f25-4f02-be60-7ac2e1603998", conFom).then(res =>res.status === 200 ? setFormStatus('Ура, вы записаны !' ):setFormStatus( 'упс... ошибочка'))
        name.value = ''
        lastName.value=''
        email.value = ''
        phone.value = ''

        let massage = " Новая заявка на мк 'В капельках росы' "

        axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`, {
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: massage
        })
      }

    return(
        <div className={styles.contact_wrapper} id="contactForm">
    <div className="container mt-10">
      <h2 className={styles.call}>Чтобы приоберсти мастер класс, заполните форму</h2>
      <form onSubmit={onSubmit} >
        <div className="mb-5">
          <label className="form-label" htmlFor="name">
          <p className={styles.input_title}> Введите ваше имя <sup class={styles.required}>*</sup></p> 
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="lastName">
          <p className={styles.input_title}> Введите вашу фамилию<sup class={styles.required}>*</sup></p> 
          </label>
          <input className="form-control" type="text" id="lastName" required />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="email">
          <p className={styles.input_title}>Введите ваш Email <sup class={styles.required}>*</sup></p>
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="phone">
          <p className={styles.input_title}>Введите ваш телефон <sup class={styles.required}>*</sup></p>
          </label>
          <input className="form-control" type="phone" id="phone" required />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
        <div className={styles.danger}><p>Проверьте правильность указанного <span className={styles.ellowSpan}>номера телефона</span> и <span className={styles.ellowSpan}>почты</span>. Мы свяжемся с вами как можно быстрее</p></div>

        </div>
    )
}