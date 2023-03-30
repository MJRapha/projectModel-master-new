import { useState } from 'react'
import css from './Contact.module.scss'

function Contact() {
    const [formStatus, setFormStatus] = useState('Send')
    const [textMessage, setTextMessage] = useState('')
    const onSubmit = (e: any) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
        setTextMessage("Thank You")
    }
    return (
        <div className={css.myComponent}>
            <div className="container mt-5">
                <h2 className="mb-3" style={{ color: "white", textDecoration: "underline" }}>Contact</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name" style={{ color: "white", textDecoration: "underline" }}>
                            Name:
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" style={{ color: "white", textDecoration: "underline" }}>
                            Email:
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message" style={{ color: "white", textDecoration: "underline" }}>
                            Message:
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className={css.buttonSub} type="submit" /* onClick={(e) => setName(e.target.value)} */>
                        {formStatus}
                    </button>
                </form>

                <div>
                    {textMessage && <span style={{ color: "white" }}>{textMessage}</span>}
                </div>
            </div>
        </div>
    )
}

export default Contact