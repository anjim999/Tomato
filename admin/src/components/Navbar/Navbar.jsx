import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>   
      <img 
  src="https://res.cloudinary.com/dmbkmxijw/image/upload/v1739031318/g7ey0icqc92xn2sdn1dz.png" 
  alt="Eternal Logo" 
  style={{ 
    width: "50%", 
    maxWidth: "100px", 
    height: "auto", 
    maxHeight: "80px", 
    marginTop: "10px" 
  }} 
/>
      <img src="https://res.cloudinary.com/dmbkmxijw/image/upload/v1739032677/w1gwylv0rasusjyktq0z.png" alt=""  className='profile'/>
    </div>
  )
}

export default Navbar
