import React from 'react'
import "./Offers.css"
import p20 from "../Assets/p20.png"

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offersLeft">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offersRight">
            <img src= {p20} alt="" />
        </div>
    </div>
  )
}
