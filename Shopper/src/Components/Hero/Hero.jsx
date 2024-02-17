import React from 'react'
import "./Hero.css"
import arrow_icon from "../Assets/arrow.png"
import hero from "../Assets/hero.png"

export const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="heroLeft">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="heroHandIcon">
                        <p>
                        new <br/>
                        collections <br/>
                        for everyone</p>
                    </div>
                </div>
                <div className="heroLatestBtn">
                    <div>Latest Collection</div>
                    <img src= {arrow_icon} alt="" />
                </div>
            </div>
            <div className="heroRight">
                <img src= {hero} alt="" />
            </div>
        </div>
    </div>
  )
}
