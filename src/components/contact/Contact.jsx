import React from 'react'
import con from "../../assets/contact.png"
import './Contact.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function contact() {

useGSAP(()=>{
  gsap.from('.left-contact img',{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.left-contact img',
        scroll:'body',
        scrub: 2,
        start: 'top 70%',
        end: 'top 20%'
      }
    })
  gsap.from('form',{
      x: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : 'form',
        scroll:'body',
        scrub: 2,
        start: 'top 70%',
        end: 'top 20%'
      }
    })
})

  return (
    <div id='contact'>
        <div className="left-contact">
            <img src={con} alt="contact" />
        </div>
        <div className="right-contact">
            <form action="">
                <input type="text" name='userName' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <textarea rows='5' name="message" id="textarea" placeholder='write...'></textarea>
                <input type="submit" name="" id="btn" value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default contact