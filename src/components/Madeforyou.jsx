import React from 'react'
import Madeforyou_img from '../assets/whatwedo_img.png'

function Madeforyou() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between bg-black '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10 mt-10'>
        <div>
                <img className='w-full px-10 ' src={Madeforyou_img}alt='/'/>
            </div>
           <div className='flex flex-col justify-center md:items-start w-full px-20  mb-40 gap-8 '>
                <h1 className='font-extralight  text-white  '>MADE FOR YOU</h1>
                <h1 className='text-white font-bold text-36'>Listen to what you love</h1>
                <p className='text-15 font-light text-white'>Let your favorite music and podcasts come to you.</p>
                <button className='py-6  sm:w-[60%]  my-4  text-black font-bold bg-yellow rounded-full cursor-pointer'>EXPLORE</button>
                    
           </div>
          
       
            
            
            
        </div>
    </div>
  )
}

export default Madeforyou