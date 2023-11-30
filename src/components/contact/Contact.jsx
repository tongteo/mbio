import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyp59ib', 'template_5wntqky', form.current, 'rrf8USxJ1LoNczjHy')
    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Thông tin liên hệ</h5>
    <h2>Email và Messenger</h2>

    <div  className="container contact__container">
      <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>vinhtrung1412@gmail.com</h5>
            <a href="mailto:vinhtrung1412@gmail.com">Gửi tin nhắn</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Hứa Trung</h5>
            <a href="https://m.me/Executioner1994/">Gửi tin nhắn</a>
          </article>
      </div>  
      <form ref={form} onSubmit={sendEmail}j>
        <input type="text" name="name" placeholder="Tên của bạn" required  />
        <input type="text" name="email" placeholder="Email của bạn" required  />
        <textarea name="message" rơws="7" placeholder="Tin nhắn của bạn" required></textarea>
        <button type="submit" className="btn btn-primary">Gửi đi</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
