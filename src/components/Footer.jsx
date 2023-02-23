import React from 'react'
import logo from '../assets/LOGO.png'
import facebook from '../assets/facebook.png'
import instagram_icon from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
function Footer() {
  return (
    <>
        <div className='w-full h-100    flex-col justify-between mt-16  bg-footer-bg bg-cover  '>
        
            
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-4  pt-8 sm:pt-20  '>
        {/* <div className='  py-8   '>
             
         
            <a href="home" className="nav__brand text-white font-serif textbold">
            <img src={logo} style={{width:'200px'}} alt=""/>
            </a>
        </div> */}
        <div className=' px-12 py-8  '>
       {/* Quick link */}
       
        <a href="home" className="nav__link text-white hover:text-blue">
                Home
        </a>
            <br/>
        <a href="about" className="nav__link text-white hover:text-blue">
            About
        </a>
        <br/>
        <a href="services" className="nav__link text-white hover:text-blue">
                Services
        </a>
        <br/>
        <a href="contact" className="nav__link text-white hover:text-blue">
                Contact
        </a>
       </div>

       <div className=' px-12 py-8 '>
       {/* Quick link */}
       
        <a href="home" className="nav__link text-white hover:text-blue">
        Communities
        </a>
            <br/>
        <a href="about" className="nav__link text-white hover:text-blue">
        Developer
        </a>
        <br/>
        <a href="services" className="nav__link text-white hover:text-blue">
        For Artists
        </a>
        <br/>
        <a href="contact" className="nav__link text-white hover:text-blue">
        Advertising
        </a>
       </div>
       {/* <h1 className='text-white font-extrabold hover:text-blue'>Follow Us</h1>  */}
       
       <div className=' flex px-20 py-8  '>
        
             <img src={instagram_icon} style={{width:'60px',height:'60px'}} alt="" />
             <img src={facebook} style={{width:'60px',height:'60px'}} alt="" />
             <img src={twitter} style={{width:'60px',height:'60px'}} alt="" />
         </div>
       
        </div>
        <div className='  py-8   '>
             
         
            <a href="home" className="nav__brand text-white font-serif textbold">
            <img src={logo} style={{width:'200px'}} alt=""/>
            </a>
        </div>
     </div>
    </>
  )
}

export default Footer