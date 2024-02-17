import React from 'react'
import "../Pages/CSS/LoginSignUp.css"

export const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUpContainer">
        <h1>Sign Up</h1>
        <div className="loginSignUpFields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginSignUpLogin'>
          Already have an account <span>Login here</span>
        </p>
        <div className="loginSignUpAgree">
          <input type="checkbox" name='' id='' />
          <p>By contining, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
