import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Giới thiệu </h5>
      <h2> Về bản thân </h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Kinh nghiệm </h5>
                <small>Trên 3 năm </small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Khách hàng</h5>
                <small>Trên 20</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5> Sản phẩm </h5>
                <small>Hơn 10 </small>
              </article>
            </div>
            <p>
              Sinh viên Công nghệ thông tin trường Đại học Bạc Liêu khóa 13, được đào tạo bài bản các kiến thức chuyên ngành, có khả năng làm việc độc lập và làm việc nhóm. Khả năng tự học qua các phương tiện truyền thông trên internet và các tài liệu sách với ngôn ngữ tiếng Việt hoặc tiếng Anh.
            </p>
          <a href="#contact" className="btn btn-primary"> Liên hệ </a>
        </div>
      </div>
    </section>
  )
}

export default About
