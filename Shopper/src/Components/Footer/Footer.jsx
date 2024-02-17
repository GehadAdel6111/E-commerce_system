import React from 'react'
import "./Footer.css"
import bags from "../Assets/bags.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src= {bags} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footerLinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footerSocialIcon">
            <div className="footerIconsContainer">
                <img src= {instagram_icon} alt="" />
            </div>
            <div className="footerIconsContainer">
                <img src= {pintester_icon} alt="" />
            </div>
            <div className="footerIconsContainer">
                <img src= {whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footerCopyRight">
            <hr />
            <p>Copyright at 2024 - All Right Reserved.</p> 
        </div>
    </div>
  )
}
