import React from 'react'
import "./About.css"
import Card from '../card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(()=>{
    gsap.from('.circle',{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.circle',
        scroll:'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    gsap.from('.line',{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.circle',
        scroll:'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    gsap.from('.about-details h1',{
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.about-details h1',
        scroll:'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    gsap.from('.about-details ul',{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.about-details ul',
        scroll:'body',
        scrub: 2,
        start: 'top 90%',
        end: 'top 10%'
      }
    })
    gsap.from('.right-about',{
      x: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.right-about',
        scroll:'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 20%'
      }
    })
  })

  return (
    <div id="about">
        <div className="left-about">
          <div className="about-details">
            <div className="personal-info">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>Name</span>: Dinesh Kumar Kori
                </li>
                <li>
                  <span>Nationality</span>: Indian
                </li>
                <li>
                  <span>Gender</span>: Male
                </li>
                <li>
                  <span>Lang Known</span>: Hindi
                </li>
              </ul>
            </div>
            <div className="Education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>Degree</span>: B.tech
                </li>
                <li>
                  <span>Branch</span>: Computer Science & Engineering
                </li>
                <li>
                  <span>CGPA</span>: 7.18
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>Technical Skills</h1>
              <ul>
                <li>
                  MERN
                </li>
                <li>
                  JAVA
                </li>
                <li>
                  DSA with java
                </li>
                <li>
                  HTML, CSS, JAVASCRIPT
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-about">
            <Card title="MERN STACK DEVELOPER" image={mern}/>
            <Card title="JAVA" image={java}/>
            <Card title="DSA" image={dsa}/>
        </div>
    </div>
  )
}

export default About