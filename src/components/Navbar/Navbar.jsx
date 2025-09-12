import React, { useRef } from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"

function Navbar() {

    let menu = useRef()
    let mobile = useRef()
    
    

  return (
    <nav>
        <h1>Portfolio</h1>
        <ul className='desktop-menu'>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="project" activeClass='active' smooth={true} duration={500}><li>Project</li></Link>
            <Link to="contact" activeClass='active' smooth={true} duration={500}><li>Contact</li></Link>
        </ul>
        <div className='hamburger' ref={menu} onClick={()=>{
            mobile.current.classList.toggle("active-mobile")
            menu.current.classList.toggle("active-ham")
        }}>
            <div className='ham '></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>
        <ul className='mobile-menu' ref={mobile}>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="project" activeClass='active' smooth={true} duration={500}><li>Project</li></Link>
            <Link to="contact" activeClass='active' smooth={true} duration={500}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar