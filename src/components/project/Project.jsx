import React from 'react'
import Card from '../card/Card'
import './Project.css'
import va from '../../assets/va.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function Project() {
  
  useGSAP(()=>{
    gsap.from('h1',{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : 'h1',
        scroll:'body',
        scrub: 2,
        start: 'top 60%',
        end: 'top 20%'
      }
    })
    gsap.from('.slider',{
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger:{
        trigger : '.slider',
        scroll:'body',
        scrub: 2,
        start: 'top 80%',
        end: 'top 20%'
      }
    })
  })

  return (
    <div id='project'>
        <h1 className='heading'>1+ year experience in projects</h1>
        <div className="slider">
            <Card title="Virtual Assistant" image={va}/>          
            <Card title="Virtual Assistant" image={va}/>          
            <Card title="Virtual Assistant" image={va}/>          
            <Card title="Virtual Assistant" image={va}/>          
            <Card title="Virtual Assistant" image={va}/>          
        </div>
    </div>
  )
}

export default Project