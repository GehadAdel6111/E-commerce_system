import React from 'react'
import "./BreadCrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

export const BreadCrum = (props) => {
    const {product} = props
  return (
    <div className='breadCrum'>
        HOME <img src= {arrow_icon} alt="" /> SHOP <img src= {arrow_icon} alt="" /> {product.category} <img src= {arrow_icon} alt="" /> {product.name}
    </div>
  )
}
