import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> Các kỹ năng được đào tạo và tìm hiểu qua </h5>
      <h2> Kinh nghiệm bản thân </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Thiết kế giao diện </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>HTML</h4>
                 <small className="text-light"> Đã được đào tạo </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Vue JS</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>CSS</h4>
                 <small className="text-light"> Đã được đào tạo </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Javascript</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Bootstrap</h4>
                 <small className="text-light"> Đã được đào tạo </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Tailwind</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>React JS</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> Xử lý phía hệ thống </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Nodejs</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Mongodb</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>PHP</h4>
                 <small className="text-light"> Đã được đào tạo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>MySQL</h4>
                 <small className="text-light"> Đã được đào tạo</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Python</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                  <h4>Django</h4>
                 <small className="text-light"> Đã đọc tài liệu </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
