import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Xin chào, tôi là </h1>
        <h2>Hứa Thạch Vĩnh Trung</h2>
        <h3 className="text-light">Sinh viên trường Đại học Bạc Liêu khóa 13(2019-2013) </h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down"> Cuối trang </a>
      </div>
    </header>
  )
}

export default Header
