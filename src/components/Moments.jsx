import React from 'react'
import sleep from '../assets/sleep_img.png'
import work from '../assets/work_img.png'
import wakeup from '../assets/wakeup_img.png'
import family from '../assets/family_img.png'
import entain from '../assets/entain_img.png'
import exercise from '../assets/exercise_img.png'

function Moments() {
  return (
    <>
    <div className=' max-w-[1240px] mx-auto mt-10 mb-40 p-40'>
      <h1 className='text-center text-36 text-black font-bold sm:text-20 '> Star music for every moment</h1>
     
      <div className='grid grid-cols-1 lg:grid-cols-3   gap-x-40 gap-y-16  pt-12 sm:pt-20 '>
        <div className=''>
        <img src={wakeup}  alt='/'/>
        <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Wake Up</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>

       <div className=''>
       <img src={sleep}  alt='/'/>
       <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Sleep</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>
       <div className=''>
       <img src={work}  alt='/'/>
       <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Work</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>
       <div className=''>
       <img src={entain}  alt='/'/>
       <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Entartain</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>
       <div className=''>
       <img src={family}  alt='/'/>
       <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Family</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>
       <div className=''>
       <img src={exercise}  alt='/'/>
       <h4 className='text-center text-20 my-4 font-extrabold text-yellow'>Exercise</h4>
        <p className='text-10 text-center'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>

       
       
    </div>
   
      </div>
    </>
  )
}

export default Moments