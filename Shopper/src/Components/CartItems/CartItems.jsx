import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
    const {all_product , cartItems , removeFromCart , getTotalCartAmount , addToCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="cartItemsFormatMain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />       
        {all_product.map((e)=>{
                if (cartItems[e.id] > 0){
                    return <div><div className="cartItemsFormat cartItemsFormatMain">
                        <img className='cartIconProductIcon' src= {e.image} alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartItemsQuantity' onClick={()=>{addToCart(e.id)}}>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <button className='removeButton' onClick={()=>{removeFromCart(e.id)}}>X</button>
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartItemsDown">
                <div className="cartItemsTotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItemsTotalItem">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="cartItemsTotalItem">
                        <p>shipping fee</p>
                        <p>free</p>
                    </div>
                    <hr />
                    <div className="cartItemsTotalItem">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItemsPromocode">
                    <p>If you have a promocode , enter it here</p>
                    <div className="cartItemsPromobox">
                        <input type="text" placeholder='Promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
