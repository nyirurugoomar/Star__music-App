import React from 'react'
import mobile_img from '../assets/app_image.png'

function Mobileapp() {
  return (
    <div className="w-full h-screen  flex flex-col justify-between bg-yellow ">
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10 mt-10'>
        <div>
                <img className='w-full px-10 ' src={mobile_img}alt='/'/>
            </div>
           <div className='flex flex-col justify-center md:items-start w-full px-20  mb-40 gap-8 '>
                <h1 className='font-extralight  text-black  '>MOBILE APP</h1>
                <h1 className='text-black font-bold text-36'>Listen to what you love</h1>
                <p className='text-15 font-light text-black'>Get the most out of the mobile experience.</p>
                <button className='py-6  sm:w-[60%]  my-4  text-white font-bold bg-black rounded-full cursor-pointer'>EXPLORE</button>
                    
           </div>
          
       
            
            
            
        </div>
    </div>
  )
}

export default Mobileapp