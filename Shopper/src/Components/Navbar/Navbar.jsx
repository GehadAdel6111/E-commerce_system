import React, { useContext, useState } from 'react'
import "./Navbar.css"
import bags from "../Assets/bags.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
  const [menu , setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext) 
  return (
    <div className='navbar'>
        <div className="navLogo">
          <img src={bags} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="navMenu">
          <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration : "none"}} to= "/"> SHOP </Link> {menu === "shop"? <hr/> : <></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration : "none"}} to= "/men"> Men </Link> {menu === "men"? <hr/> : <></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration : "none"}} to= "/women"> Women </Link> {menu === "women"? <hr/> : <></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration : "none"}} to= "/kids"> Kids </Link> {menu === "kids"? <hr/> : <></>}</li>
        </ul>
        <div className="navLoginCart">
          <Link to= "/login" > <button>Login</button> </Link> 
          <Link to= "/cart"> <img src={cart_icon} alt="" /> </Link>
          <div className="navCartCount">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
