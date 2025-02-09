import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, Links, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { menu_list } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {

  const[menu,setmenu]=useState("home"); 
  const{getTotalCartAmount,token,setToken}=useContext(StoreContext);
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
     <Link to='/'> 
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


</Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setmenu("mobile")} className={menu==="mobile"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
     
        <div className='navbar-search-icon'>
        <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?  <button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>}
      
      </div>
    </div>
  )
}

export default Navbar
