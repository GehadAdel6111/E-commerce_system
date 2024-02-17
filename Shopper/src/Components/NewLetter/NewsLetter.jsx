import React from 'react'
import "./NewsLetter.css"

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>GET EXCLUSIVE OFFERS IN YOUR EMAIL</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
