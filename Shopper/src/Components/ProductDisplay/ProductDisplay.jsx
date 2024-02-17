import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productDisplayLeft">
            <div className="productDisplayImgList">
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />
            </div>
            <div className="productDisplayImg">
                <img className='productDisplayMainImg' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplayRight">
            <h1>{product.name}</h1>
            <div className="productDisplayRightStars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplayRightPrices">
                <div className="productDiplayRightPriceOld">
                    ${product.old_price}
                </div>
                <div className="productDiplayRightPriceNew">
                    ${product.new_price}
                </div>
            </div>
            <div className="productDisplayRightDescribtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio sit voluptatibus, facilis at iusto maiores quia! Inventore, consequuntur.
                Laboriosam totam maxime possimus, vero dicta illo id quaerat aperiam consequuntur itaque.
            </div>
            <div className="productDisplayRightSize">
                <h1>Select size</h1>
            </div>
            <div className="productDisplayRightSizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productDisplayRightCategory'><span>Category : </span>Women ,T-Shirt , crop Top</p>
            <p className='productDisplayRightCategory'><span>Tags : </span>Modern ,Latest</p>

        </div>
    </div>
  )
}
