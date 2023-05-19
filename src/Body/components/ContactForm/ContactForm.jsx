import React from "react"
import styles from "./style.module.scss"
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Записаться на курс')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email} = e.target.elements
        let conFom = {
          name: name.value,
          email: email.value,
        }
        console.log(conFom)
      }

    return(
        <div className={styles.contact_wrapper}>
    <div className="container mt-10">
      <h2 className={styles.call}>Призыв Призыв Призыв Призыв Призыв Призыв </h2>
      <form onSubmit={onSubmit} >
        <div className="mb-5">
          <label className="form-label" htmlFor="name">
          <p> Введите ваше имя</p> 
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-5">
          <label className="form-label" htmlFor="email">
          Введите ваш Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <button className="btn btn-secondary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
        <div className={styles.danger}>!!!!<p>Проверьте правильность указанного номера и почты, т.к. на них придет ваше приглашение на мастер класс</p></div>

        </div>
    )
}