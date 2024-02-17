import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBoxNavigator">
            <div className="descriptionBoxNavBox">Description</div>
            <div className="descriptionBoxNavBox fade">Reviews (122)</div>
        </div>
        <div className="descriptionBoxDescription">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis nemo quaerat provident blanditiis soluta rerum, 
            sapiente optio. Officiis praesentium delectus unde officia deserunt earum, 
            a itaque harum eum, vel facere!</p>
        </div>
    </div>
  )
}
