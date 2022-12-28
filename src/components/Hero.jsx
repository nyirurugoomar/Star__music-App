import React from 'react'
import hero_img from '../assets/hero_img.png'

function Hero() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between bg-yellow  '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10 mt-10'>


        
         
           <div className='flex flex-col justify-center md:items-start w-full px-10 py-10 '>
                <h1 className='font-bold text-70 '>Discover your way everywhere</h1>
                <p className='text-20 font-light'>It's never been easier to find the best music and podcasts.</p>
                    
           </div>
          
       
           <div>
                <img className='w-full px-10 ' src={hero_img}alt='/'/>
        </div>
            
            
        </div>
    </div>
  )
}

export default Hero