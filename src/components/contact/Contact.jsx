import React from 'react'
import con from "../../assets/contact.png"
import './Contact.css'

function contact() {
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