import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FaUserTie} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import {FcBusinessContact} from 'react-icons/fc'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active':''}><FcHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === "#about" ? 'active':''} ><FaUserTie/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === "#experience" ? 'active':''}><FaBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === "#services" ? 'active':''}><FaHandshake/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === "#contact" ? 'active':''}><FcBusinessContact/></a>
    </nav>
  )
}

export default Nav
