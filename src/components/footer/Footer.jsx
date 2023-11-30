import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">VINCENT</a>

      <ul className="permalinks">
        <li><a href="#">Đầu trang</a></li>
        <li><a href="about">Thông tin</a></li>
        <li><a href="experience">Kinh nghiệm</a></li>
        <li><a href="services">Dịch vụ</a></li>
        <li><a href="portfolio">Danh mục</a></li>
        <li><a href="contact">Liên hệ </a></li>
      </ul>

    <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Bản quyền 2023 </small>
    </div>
    </footer>
  )
}

export default Footer
