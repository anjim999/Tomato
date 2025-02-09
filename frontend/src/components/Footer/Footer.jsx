import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img 
  src="https://res.cloudinary.com/dmbkmxijw/image/upload/v1739031318/g7ey0icqc92xn2sdn1dz.png" 
  alt="Eternal Logo" 
  style={{ 
    width: "50%", 
    maxWidth: "300px", 
    height: "auto", 
    maxHeight: "80px", 
    marginTop: "10px" 
  }} 
/>

                <p>Eternal – Your Favorite Food, Delivered Fast and Fresh! Craving Something Delicious? Order Now on Eternal! From Local Eats to Gourmet Treats – Eternal Delivers Happiness!
                </p>
                <div className="footer-social-icons">
                   <a href="https://www.facebook.com/venkatareddy.allu.718"> <img src={assets.facebook_icon} alt="" /></a>
                   <a href="https://x.com/venkatared6"><img src={assets.twitter_icon} alt="" /></a>
                   <a href="https://www.linkedin.com/in/allu-venkata-reddy/"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 6305738650</li>
                    <li>venkatareddyallu63057@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copy-right">
            Copyright 2025 Eternal.com-All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer
