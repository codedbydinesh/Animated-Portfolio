import React from 'react'
import Card from '../card/Card'
import './Project.css'
import va from '../../assets/va.png'
function Project() {
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